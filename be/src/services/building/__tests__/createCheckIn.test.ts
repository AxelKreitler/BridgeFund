import { service } from "../..";
import {
  CBadRequestError,
  CBuildingSpaceMapper,
  EParkingType,
  IBuildingSpaceRepo,
  IOccupation,
} from "../../../models";
import { dbService } from "../../db";
import { createCheckIn } from "../createCheckIn.service";

const mockOccupationResponse: IOccupation[] = [
  {
    parkingType: EParkingType.Resident,
    occupiedSpaces: 0,
    totalSpaces: 50,
  },
  {
    parkingType: EParkingType.Cars,
    occupiedSpaces: 0,
    totalSpaces: 80,
  },
  {
    parkingType: EParkingType.Motorcycle,
    occupiedSpaces: 0,
    totalSpaces: 20,
  },
];

const mockCheckInResponse: IBuildingSpaceRepo[] = [
  {
    id: 1,
    building_id: 1,
    session: "cb2629f8-fddb-11ef-8d2d-4cd717123c8d",
    parking_type: EParkingType.Cars,
    started_at: new Date("2025-03-10T20:15:00Z"),
    ended_at: null,
  },
];

jest.mock("../..", () => ({
  service: {
    building: {
      getOccupation: jest.fn(async () => mockOccupationResponse),
    },
  },
}));

jest.mock("../../db", () => ({
  dbService: {
    building: {
      createCheckIn: jest.fn(async () => mockCheckInResponse),
    },
  },
}));

jest.spyOn(CBuildingSpaceMapper, "toDomain");

describe("createCheckIn", () => {
  const buildingId = 1;
  const parkingType = EParkingType.Cars;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a check-in successfully when there is available parking", async () => {
    const result = await createCheckIn({ buildingId, parkingType });

    expect(service.building.getOccupation).toHaveBeenCalledWith({
      id: buildingId,
    });
    expect(dbService.building.createCheckIn).toHaveBeenCalledWith({
      buildingId,
      parkingType,
    });
    expect(CBuildingSpaceMapper.toDomain).toHaveBeenCalledWith(
      mockCheckInResponse[0]
    );
    expect(result).toEqual(
      CBuildingSpaceMapper.toDomain(mockCheckInResponse[0])
    );
  });

  it("should throw a CBadRequestError when there are no available parking spaces", async () => {
    (service.building.getOccupation as jest.Mock).mockImplementation(
      async () => [
        {
          parkingType: EParkingType.Cars,
          occupiedSpaces: 80,
          totalSpaces: 80, // Full parking
        },
      ]
    );

    await expect(createCheckIn({ buildingId, parkingType })).rejects.toThrow(
      CBadRequestError
    );
    await expect(createCheckIn({ buildingId, parkingType })).rejects.toThrow(
      expect.objectContaining({
        statusCode: 400,
      })
    );
    expect(dbService.building.createCheckIn).not.toHaveBeenCalled();
  });
});

import query from "../../../../db";
import { EParkingType, IOccupationRepo } from "../../../../models";
import { getOccupation } from "../getOccupation.db";

const mockOccupationResponse: IOccupationRepo[] = [
  {
    parking_type: EParkingType.Resident,
    occupied_spaces: 0,
    total_spaces: 50,
  },
  {
    parking_type: EParkingType.Cars,
    occupied_spaces: 0,
    total_spaces: 80,
  },
  {
    parking_type: EParkingType.Motorcycle,
    occupied_spaces: 0,
    total_spaces: 20,
  },
];

jest.mock("../../../../db", () => jest.fn(async () => mockOccupationResponse));

describe("getOccupation", () => {
  const mockBuildingId = 1;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return proper result for get occupation with valid buildingId", async () => {
    const result = await getOccupation({ buildingId: mockBuildingId });

    expect(query).toHaveBeenCalledWith(expect.stringContaining("SELECT"), [
      mockBuildingId,
    ]);
    expect(result).toEqual(mockOccupationResponse);
  });
});

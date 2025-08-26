import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, X } from "lucide-react";

interface AvailabilityCalendarProps {
  availability: string[];
  doctorName: string;
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  availability,
  doctorName,
}) => {
  // Parse availability strings to get day and time information
  const parseAvailability = (availabilityStr: string) => {
    const [day, timeInfo] = availabilityStr.split(": ");
    const isAvailable = timeInfo && timeInfo !== "Not Available" && timeInfo.trim() !== "";
    
    if (!isAvailable) {
      return { day, isAvailable: false, timeInfo: "Not Available" };
    }

    // Extract time range if available
    const timeMatch = timeInfo.match(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/);
    if (timeMatch) {
      return {
        day,
        isAvailable: true,
        timeInfo: `${timeMatch[1]} - ${timeMatch[2]}`,
      };
    }

    return { day, isAvailable: true, timeInfo };
  };

  const weekDays = [
    "Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const parsedAvailability = weekDays.map(day => {
    const found = availability.find(a => a.startsWith(day));
    if (found) {
      return parseAvailability(found);
    }
    return { day, isAvailable: false, timeInfo: "Not Available" };
  });

  if (!availability || availability.length === 0) {
    return (
      <Card className="border-none shadow-lg overflow-hidden rounded-xl">
        <CardHeader className="bg-gray-50 px-6 py-4">
          <CardTitle className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            Availability Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center text-gray-500 py-8">
            <X className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No availability information available for this doctor.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-lg overflow-hidden rounded-xl">
      <CardHeader className="bg-[#0902AF] px-6 py-4">
        <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-white" />
          Dr. {doctorName}'s Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {parsedAvailability.map((day, index) => (
            <div
              key={day.day}
              className={`flex items-center justify-between p-4 ${
                day.isAvailable ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    day.isAvailable ? "bg-[#0DA93E]" : "bg-gray-300"
                  }`}
                />
                <span className={`font-medium ${
                  day.isAvailable ? "text-gray-900" : "text-gray-500"
                }`}>
                  {day.day}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {day.isAvailable ? (
                  <>
                    <Clock className="w-4 h-4 text-[#00A651]" />
                    <span className="text-[#00A651] font-medium text-sm">
                      {day.timeInfo}
                    </span>
                  </>
                ) : (
                  <span className="text-gray-400 text-sm">
                    {day.timeInfo}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="bg-gray-50 p-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#00A651]"></div>
              <span className="text-gray-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="text-gray-600">Not Available</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailabilityCalendar;

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Sport Car", value: 17439 },
    { name: "SUV", value: 9478 },
    { name: "Coupe", value: 18197 },
    { name: "Hatchback", value: 12510 },
    { name: "MPV", value: 14406 },
];

const COLORS = ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087"];

const CarRentalChart = () => {
    return (
        <div style={{ textAlign: "center" }} className="bg-[#ffffff] shadow rounded-[10px] mt-5 p-5">

            <Box>
            <h1 className="text-start text-xl font-bold">Top 5 Car Rental</h1>

                <Flex className=" items-center">

                    <PieChart width={250} height={250}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>

                    <div>
                        {data.map((entry, index) => (
                            <div key={index} style={{ display: "flex", justifyContent: "space-between", gap: "100px", margin: "25px 0" }}>
                                <div style={{ color: COLORS[index], fontWeight: 'bold', }}>{entry.name}</div>
                                <div>{entry.value}</div>
                            </div>
                        ))}
                    </div>

                </Flex>
            </Box>

        </div>
    );
};

export default CarRentalChart;

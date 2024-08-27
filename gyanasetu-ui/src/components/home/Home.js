import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import './a.css'

export default function Dashboard() {
  const [widgets, setWidgets] = useState([
    { id: 1, title: "Sales", content: "$20,000", bgColor: "#FF9300", type: "text" },
    { id: 2, title: "Users", content: "1,500", bgColor: "#00A2FF", type: "text" },
    { id: 3, title: "Orders", content: "350", bgColor: "#FF5733", type: "text" },
    { id: 4, title: "Feedback", content: "Positive", bgColor: "#28A745", type: "text" },
    { id: 5, title: "Market Share", bgColor: "#673AB7", type: "piechart" },
  ]);

  const pieChartData = [
    { id: "Product A", value: 300, color: "#FF6384", label: "series A" },
    { id: "Product B", value: 500, color: "#36A2EB", label: "series B" },
    { id: "Product C", value: 200, color: "#FFCE56", label: "series C" },
  ];

  const layout = [
    { i: "1", x: 0, y: 0, w: 3, h: 2 },
    { i: "2", x: 3, y: 0, w: 3, h: 2 },
    { i: "3", x: 6, y: 0, w: 3, h: 2 },
    { i: "4", x: 0, y: 2, w: 3, h: 2 },
    { i: "5", x: 3, y: 2, w: 6, h: 3 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Draggable and Resizable Dashboard
      </Typography>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={100}
        width={1200}
        onLayoutChange={(newLayout) => console.log(newLayout)}
      >
        {widgets.map((widget) => (
          <div
            key={widget.id.toString()}
            data-grid={layout.find((l) => l.i === widget.id.toString())}
          >
            <Card
              style={{
                padding: "20px",
                backgroundColor: widget.bgColor,
                color: "#ffffff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{widget.title}</Typography>
              {widget.type === "piechart" ? (
                <div style={{ width: "100%", height: "auto" }}>
                  <PieChart
                    width={300}
                    height={200}
                    series={[
                      {
                        data: pieChartData,
                      },
                    ]}
                  />
                  <Typography variant="body2" style={{ marginTop: "10px" }}>
                    Market share distribution for the current year.
                  </Typography>
                </div>
              ) : (
                <Typography variant="h4">{widget.content}</Typography>
              )}
            </Card>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

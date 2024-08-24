import React, { useState } from "react";
import { Card, Typography, Grid } from "@mui/material";

export default function Dashboard() {
  // State to track widgets in each container
  const [containers, setContainers] = useState({
    container1: [{ id: 1, title: "Sales", content: "$20,000", bgColor: "#FF9300" }],
    container2: [{ id: 2, title: "Users", content: "1,500", bgColor: "#00A2FF" }],
    container3: [{ id: 3, title: "Orders", content: "350", bgColor: "#FF5733" }],
    container4: [{ id: 4, title: "Feedback", content: "Positive", bgColor: "#28A745" }],
  });

  // Handle drag start event
  const handleDragStart = (e, widget, sourceContainer) => {
    e.dataTransfer.setData("widget", JSON.stringify(widget));
    e.dataTransfer.setData("sourceContainer", sourceContainer);
  };

  // Handle drop event
  const handleDrop = (e, targetContainer) => {
    e.preventDefault();
    const widget = JSON.parse(e.dataTransfer.getData("widget"));
    const sourceContainer = e.dataTransfer.getData("sourceContainer");

    // Prevent drop on the same container
    if (sourceContainer === targetContainer) return;

    // Update state by removing the widget from the source container and adding it to the target container
    setContainers((prevState) => ({
      ...prevState,
      [sourceContainer]: prevState[sourceContainer].filter((item) => item.id !== widget.id),
      [targetContainer]: [...prevState[targetContainer], widget],
    }));
  };

  // Allow dropping by preventing the default behavior
  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Render containers and widgets
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Draggable Dashboard
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(containers).map((containerKey) => (
          <Grid item xs={12} sm={6} md={3} key={containerKey}>
            <div
              onDrop={(e) => handleDrop(e, containerKey)}
              onDragOver={allowDrop}
              style={{
                minHeight: "300px",
                padding: "10px",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {`Container ${containerKey.charAt(containerKey.length - 1)}`}
              </Typography>
              {containers[containerKey].map((widget) => (
                <Card
                  key={widget.id}
                  onDragStart={(e) => handleDragStart(e, widget, containerKey)}
                  draggable
                  style={{
                    padding: "20px",
                    backgroundColor: widget.bgColor,
                    color: "#ffffff",
                    cursor: "move",
                    marginBottom: "10px",
                    position: "relative",
                  }}
                >
                  <Typography variant="h6">{widget.title}</Typography>
                  <Typography variant="h4">{widget.content}</Typography>
                </Card>
              ))}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

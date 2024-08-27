import React, { useState, useEffect } from "react";
import { Card, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { PieChart } from "@mui/x-charts";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./a.css";

export default function Dashboard() {
  // Load widgets from local storage if available, otherwise use the default widgets
  const initialWidgets = JSON.parse(localStorage.getItem("dashboardWidgets")) || [
    { id: 1, title: "Sales", content: "$20,000", bgColor: "#FF9300", type: "text" },
    { id: 2, title: "Users", content: "1,500", bgColor: "#00A2FF", type: "text" },
    { id: 3, title: "Orders", content: "350", bgColor: "#FF5733", type: "text" },
    { id: 4, title: "Feedback", content: "Positive", bgColor: "#28A745", type: "text" },
    { id: 5, title: "Market Share", bgColor: "#673AB7", type: "piechart" },
  ];

  const [widgets, setWidgets] = useState(initialWidgets);

  const availableWidgets = [
    { id: 6, title: "Revenue", content: "$15,000", bgColor: "#FF9500", type: "text" },
    { id: 7, title: "Traffic", content: "10K Visits", bgColor: "#00C8FF", type: "text" },
    { id: 8, title: "Conversion Rate", content: "4.5%", bgColor: "#FF4500", type: "text" },
    { id: 9, title: "Satisfaction", content: "85%", bgColor: "#4CAF50", type: "text" },
    { id: 10, title: "Sales by Region", bgColor: "#673AB7", type: "piechart" },
  ];

  const pieChartData = [
    { id: "Product A", value: 300, color: "#FF6384", label: "series A" },
    { id: "Product B", value: 500, color: "#36A2EB", label: "series B" },
    { id: "Product C", value: 200, color: "#FFCE56", label: "series C" },
  ];

  const layout = widgets.map((widget, index) => ({
    i: widget.id.toString(),
    x: (index % 3) * 3,
    y: Math.floor(index / 3) * 2,
    w: 3,
    h: widget.type === "piechart" ? 3 : 2,
  }));

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddWidget = (event, selectedWidget) => {
    if (selectedWidget) {
      const newWidgets = [...widgets, selectedWidget];
      setWidgets(newWidgets);
      localStorage.setItem("dashboardWidgets", JSON.stringify(newWidgets)); // Save to localStorage
      handleClose(); // Close the dialog after adding the widget
    }
  };

  // Save the current layout to localStorage whenever widgets state changes
  useEffect(() => {
    localStorage.setItem("dashboardWidgets", JSON.stringify(widgets));
  }, [widgets]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Draggable and Resizable Dashboard
      </Typography>

      {/* Button to Open Add Widget Dialog */}
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginBottom: "20px" }}>
        Add Widget
      </Button>

      {/* Dialog for Adding New Widgets */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md" // Set maxWidth to 'md' for a medium size or 'lg' for large
        fullWidth={true} // Make the dialog take up the full width of the screen
      >
        <DialogTitle>Add a New Widget</DialogTitle>
        <DialogContent style={{ minHeight: "300px", paddingTop: "20px" }}>
          <Autocomplete
            options={availableWidgets}
            getOptionLabel={(option) => option.title}
            onChange={handleAddWidget}
            renderInput={(params) => (
              <TextField {...params} label="Search Widgets" variant="outlined" fullWidth />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dashboard Grid */}
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

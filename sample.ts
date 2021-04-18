import React, { useEffect } from 'react';
import Chart from 'chart.js';
import './App.css';

function App() {
  useEffect(() => {
    const myChartRef = document.getElementById('myChart');

    Chart.Tooltip.positioners.custom = function (elements, position) {
      if (!elements.length) {
        return false;
      }
      var offset = 0;
      //adjust the offset left or right depending on the event position
      if (elements[0]._chart.width / 2 > position.x) {
        offset = 20;
      } else {
        offset = -20;
      }
      return {
        x: position.x + offset,
        y: 0
      }
    }

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [86, 67, 91],
          }
        ]
      },
      options: {
        legend: {
          display: false,
        },
        layout: {
          padding: {
            top: 50
          }
        },
        tooltips: {
          enabled: false,
          position: 'nearest',
          custom: function (tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('chartjs-tooltip');

            // Create element on first render
            if (!tooltipEl) {
              tooltipEl = document.createElement('div');
              tooltipEl.id = 'chartjs-tooltip';
              tooltipEl.innerHTML = '<table></table>';
              document.body.appendChild(tooltipEl);
            }

            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0;
              return;
            }

            // Set caret Position
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {
              tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
              tooltipEl.classList.add('no-transform');
            }

            function getBody(bodyItem) {
              return bodyItem.lines;
            }

            // Set Text
            if (tooltipModel.body) {
              var titleLines = tooltipModel.title || [];
              var bodyLines = tooltipModel.body.map(getBody);

              var innerHtml = '<thead>';

              titleLines.forEach(function (title) {
                innerHtml += '<tr><th style="background: red;">asdsadasdasdasdasdasdsadasd sadasdasds' + title + '</th></tr>';
              });
              innerHtml += '</thead><tbody>';

              bodyLines.forEach(function (body, i) {
                var colors = tooltipModel.labelColors[i];
                var style = 'background:' + colors.backgroundColor;
                style += '; border-color:' + colors.borderColor;
                style += '; border-width: 2px';
                var span = '<span style="' + style + '"></span>';
                innerHtml += '<tr><td style="background: red;">' + span + body + '</td></tr>';
              });
              innerHtml += '</tbody>';

              var tableRoot = tooltipEl.querySelector('table');
              tableRoot.innerHTML = innerHtml;
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect();

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1;
            tooltipEl.style.zIndex = 9;
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
            tooltipEl.style.top = 0;
            tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            tooltipEl.style.pointerEvents = 'none';
          }
        }
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="chart-wrapper">
        <div className="chart-toolbar">
          <button>Click Me</button>
        </div>
        <canvas
          id="myChart"
        />
      </div>
    </div>
  );
}

export default App;

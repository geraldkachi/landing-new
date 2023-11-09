// import { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";

// const BarChart = () => {
//     const [chartData, setChartData] = useState({

//     });

//     useEffect(() => {
//         setChartData({
//             labels: [
//                 "Jan",
//                 "Feb",
//                 "Mar",
//                 "Apr",
//                 "May",
//                 "Jun",
//                 "Jul",
//                 "Aug",
//                 "Sep",
//                 "Oct",
//                 "Nov",
//                 "Dec",
//             ],
//             datasets: [
//                 {
//                     label: "Delivered",
//                     backgroundColor: "#1D2C7E",
//                     borderColor: "#1D2C7E",
//                     borderWidth: 2,
//                     data: 'monthlySuccessfulDeliveries',
//                 },
//                 {
//                     label: "Failed",
//                     backgroundColor: "#FF0000",
//                     borderColor: "#FF0000",
//                     borderWidth: 2,
//                     data: 'monthlyFailedDeliveries',
//                 },
//             ],
//         });
//     }, [
//         // isLoading
//     ]);

//     return (
//         <div style={styles.charts}>
//             <div style={styles.topBar}>
//                 <div style={styles.chartInfo}>
//                     <h3>Your Performance</h3>
//                     <p>Your delivery performance overview</p>
//                 </div>
//             </div>
//             <div style={styles.chartContainer}>
//                 {/* {isLoading ? (
//                     <div className={styles.loader}>
//                         {'Loading'}
//                         <CircularProgress color="primary" size={18} />
//                     </div>
//                 ) : ( */}
//                     <Bar
//                         data={chartData}
//                         options={{
//                             // reponsive: true,
//                             maintainAspectRatio: false,
//                             title: {
//                                 display: false,
//                                 text: "Performace Report",
//                                 fontSize: 14,
//                             },
//                             legend: {
//                                 display: true,
//                                 position: "bottom",
//                                 labels: {
//                                     fontFamily: "Manrope",
//                                     fontWeight: "300",
//                                     fontSize: 12,
//                                 },
//                             },
//                             plugins: {
//                                 datalabels: {
//                                     display: false,
//                                 },
//                             },
//                             scales: {
//                                 xAxes: [
//                                     {
//                                         gridLines: {
//                                             display: false,
//                                         },
//                                     },
//                                 ],
//                                 yAxes: [
//                                     {
//                                         gridLines: {
//                                             display: true,
//                                             borderDash: [8, 4],
//                                         },
//                                     },
//                                 ],
//                             },
//                         }}
//                     />
//                 {/* )} */}
//             </div>
//         </div>
//     );
// };

// export default BarChart;

// const styles = {
//     charts: {
//         backgroundColor: "#FFFFFF",
//         borderRadius: 10,
//         boxShadow: "0 0 6px rgba(0, 0, 0, 0.16)",
//         padding: 20,
//         margin: "20px 0 0 0",
//         height: 400,
//         "& p": {
//             fontFamily: "Manrope",
//             fontWeight: 600,
//             color: "#A2A2A2",
//             textTransform: "uppercase",
//             fontSize: 10,
//             margin: 0,
//         },
//         "& h4": {
//             fontFamily: "Manrope",
//             fontWeight: 600,
//             color: "#000000",
//             fontSize: 14,
//         },
//         "media(max-width: 480px)": {
//             height: 500,
//         },
//     },
//     topBar: {
//         display: "flex",
//         justifyContent: "space-between",
//     },
//     chartInfo: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         borderLeft: "3px solid",
//         borderLeftColocr: theme.palette.primary.main,
//         margin: "10px 0 15px 0",
//         padding: "0 10px",
//         "& h3": {
//             fontFamily: "Manrope",
//             fontWeight: 800,
//             color: "#000000",
//             margin: 0,
//         },
//         "& p": {
//             fontFamily: "Manrope",
//             fontWeight: 300,
//             fontSize: 12,
//             color: "#000000",
//             margin: "5px 0 0 0",
//             textTransform: "inherit",
//         },
//     },
//     chartContainer: {
//         position: "relative",
//         height: 300,
//         /* max-height: 400px, */
//         "media(max-width: 480px)": {
//             height: 350,
//             "& canvas": {
//                 height: "100% !important",
//                 width: "100 % !important",
//             },
//         },
//     },
//     loader: {
//         height: "100%",
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//     },
// };

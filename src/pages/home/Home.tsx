import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRentalRate,
  barChartBoxVisit,
  chartBoxOverdue,
  chartBoxBorrowedBook,
  chartBoxMember,
  chartBoxBook,
} from "../../data";
import "./home.scss";

const Home = () => (
  <div className="home">
    <div className="box box1">
      <TopBox />
    </div>
    <div className="box box2">
      <ChartBox {...chartBoxBook} />
    </div>
    <div className="box box3">
      <ChartBox {...chartBoxBorrowedBook} />
    </div>
    <div className="box box4">
      <PieChartBox />
    </div>
    <div className="box box5">
      <ChartBox {...chartBoxOverdue} />
    </div>
    <div className="box box6">
      <ChartBox {...chartBoxMember} />
    </div>
    <div className="box box7">
      <BigChartBox />
    </div>
    <div className="box box8">
      <BarChartBox {...barChartBoxVisit} />
    </div>
    <div className="box box9">
      <BarChartBox {...barChartBoxRentalRate} />
    </div>
  </div>
);

export default Home;

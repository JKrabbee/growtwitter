import LeftSideBar from "../../components/home/LeftSideBar";
import DefaultLayoutStyled from "../../components/shared/DefaultLayoutStyled";

function DefaultLayout() {
  return (
    //Componente pai OK
    <DefaultLayoutStyled>
      <LeftSideBar />
      {/* Filho dinamico */}
      {/* Rigth sidebar */}
    </DefaultLayoutStyled>
  );
}

export default DefaultLayout;

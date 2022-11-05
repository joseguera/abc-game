import styled from "styled-components";

// export const Letter = styled.div`
//     width: 30px;
//     height: 30px;
//     line-height: 30px;
// `;

.card-holder {
    display: flex;
    justify-content: center;
  }
  
  .letter-detail {
    background-color: cornsilk;
    /* background-image: url("https://res.cloudinary.com/djqxogkfw/image/upload/v1660868115/Cory-Images/game_canvas_rvxiva.png"); */
    border: 1px solid #ff6347;
    width: 295px;
    height: 500px;
    border-radius: 15px;
    padding: 20px;
  }

  .playing-card {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  
  
  .xCloser-holder {
    display: flex;
    justify-content: flex-end;
  }

  .x-closer {
    /* 
      IMPROVEMENT NOTE:
      add animation, when not hovered over,
      leave as "X", else turn red with circle around it
  
    */
    cursor: pointer;
    font-size: 27px;
    color: #2f4f4f;
  }
  
  .image-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 290px;
    padding-bottom: 15px;
  }

  
  .animal-name-holder {
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
      align-items: center;
  }

  .animal-utils {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: stretch;
      width: 295px;
  }

  .animal-name-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;
}



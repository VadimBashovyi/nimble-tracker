import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  background: #fff 
  transition: background .3s; 
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 60px 5px 5px 5px;
  width: 100%;
  overflow: hidden;
  @media screen and (min-width: 560px) {
    padding-left: 10px;
    padding-right: 10px;
    width: 560px;
  }
}
.title {
  margin-bottom: 60px;
  font-size: 56px;
  display: flex;
  justify-content: center;
}

.form {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 2px;
  margin-bottom: 30px;

  width: 100%;
  height: 46px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.5);

  background: #fff;
}

.form-input {
  padding: 0px 10px;
  width: 90%;

  border: none;
  outline: none;
  background: transparent;
  color: #black;
  font-weight: 500;
  text-align: center;

  &::placeholder {
    font-weight: 400;
    transition: color .3s;
    }

    &:focus {
      &::placeholder {
        color: transparent;
        transition: color .3s;
      }
    }
  }

  .form-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;

    outline: none;
    border: none;
    border-radius: 20px;
    background-color: #fff;
    color: #green;
    transition: color background .3s;
  }

  .list {
    display: flex;
    flex-direction: column;

    width: 99%;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px 10px 10px 20px;
    border-radius: 20px;

    background: #fff;
    color: #black;
    transition: color background .3s;
  }

  .list-item.active {
    background: #fff;
    transition: background .3s;

    .list-text {
        color: #1ce08f;
        transition: color .3s;
    }
  }

  .list-item:not(last-child) {
    margin-bottom: 10px;
  }

  .list-text {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.33px;
    color: #black;
  }

  .list-text:nth-child(1) {
    flex: 2;
    text-overflow: ellipsis;
    margin-right: 5px;
    overflow: hidden;
  }

.list-text:nth-child(2) {
    flex: 1;
    font-weight: 500;
  }

.list-toggleBtn {
  margin-right: 5px;
}

.list-toggleBtn,
.list-deleteBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;

  outline: none;
  border: none;
  border-radius: 20px;

  background-color: #fff;
  color: ##1ce08f;
  
}

.wrapper {
  font-weight: bold;
  @media screen and (max-width: 559px) {
    font-size: 20px;
  }
  @media screen and (max-width: 560px) {
    font-size: 30px;
  }
  font-size: 60px;
  position: relative;
}



.scroll-wrapper {
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
  z-index: 1;
  overscroll-behavior: smooth;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 3px;
  border-radius: 5px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 5px;
}

@media screen and (min-width: 560px) {
  .list-text {
    font-size: 18px;
  }
}
@media screen and (max-width: 559px) {
.list-toggleBtn,
.list-deleteBtn {
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #fff;
  color: ##1ce08f;
  
}
}
`

export default GlobalStyle

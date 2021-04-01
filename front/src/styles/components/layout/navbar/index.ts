import styled from 'styled-components'

export const Nav = styled.nav<{ checked: boolean }>`
	position: fixed;
	z-index: 10;
	left: 0;
	right: 0;
	top: 0;
	font-family: 'Montserrat', sans-serif;
	padding: 0 5%;
	height: 100px;
	background-color: #3e65da;

  .logo {
    float: left;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #fff;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .links {
    float: right;
    padding: 0;
    margin: 0;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      list-style: none;
    }

    a, button {
      background: none;
      border: none;
      display: block;
      padding: 1em;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
  }

  #nav-toggle {
    position: absolute;
    top: -100px;
    cursor: pointer;
  }
  
  .icon-burger {
    display: none;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);

    .line {
      width: 30px;
      height: 5px;
      background-color: #fff;
      margin: 5px;
      border-radius: 3px;
      transition: all .3s ease-in-out;
    }
  }

  @media screen and (max-width: 768px) {
    .logo {
      float: none;
      width: auto;
      justify-content: center;
    }

    .links {
      float: none;
      position: fixed;
      z-index: 9;
      left: 0;
      right: 0;
      top: 50px;
      bottom: 100%;
      width: auto;
      height: auto;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: rgba(0,0,0,.8);
      overflow: hidden;
      box-sizing: border-box;
      transition: all .5s ease-in-out;

      a, button {
        font-size: 20px;
      }
    }

    .icon-burger {
      display: block;
    }

    .links {
      bottom: ${({ checked }) => checked === true && 0};

      li {
        text-align: center;
      }
    }

    .icon-burger {
      .line {
        &:nth-child(1) {
          transform: ${({ checked }) => checked === true && 'translateY(10px) rotate(225deg)'}
        }
        &:nth-child(3) {
          transform: ${({ checked }) => checked === true && 'translateY(-10px) rotate(-225deg)'}
        }
        &:nth-child(2) {
          opacity: ${({ checked }) => checked === true && 0};
        }
      }
    }
  }
`

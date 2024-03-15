import React from 'react';
import Menu from './index';
import { BsStar, BsStarFill } from "react-icons/bs"
import Toggle from "./Toggle/index"

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>

      <br />
      <hr />
      <br />
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map(sport => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

export default App;
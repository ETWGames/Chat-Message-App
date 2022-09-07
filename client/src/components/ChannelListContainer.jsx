import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import Cookies from 'universal-cookie'
import MainIcon from '../assets/MainIcon.png'

const SideBar = () => {
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="channel-list__sidebar__icon1__inner">
                <img src={MainIcon} alt="Main Icon" width="30" />
            </div>
        </div>
    </div>
}

const ChannelListContainer = () => {
  return (
    <div>
        ChannelListContainer
    </div>
  )
}

export default ChannelListContainer
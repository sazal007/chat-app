import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/chatProvider";
import SideDrawer from "../components/chat/SideDrawer";
import MyChats from "../components/chat/MyChats";
import ChatBox from "../components/chat/ChatBox";
import { useState } from "react";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <>
      <div style={{ width: '100%' }}>
        {user && <SideDrawer />}
        <Box
          style={{ display: 'flex', justifyContent: 'space-around' }}
          w='100%'
          h='91.5vh'
          p='10'
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
        </Box>
      </div>
    </>
  )
}

export default Chatpage
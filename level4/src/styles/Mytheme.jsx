import grey from "@mui/material/colors/grey";
import teal from "@mui/material/colors/teal";

const getDesignTokens=(mode)=>({
    palette: {
        // @ts-ignore
        mode: mode,
        ...(mode==="light"
          ? {
            ali:{
              main:'#64748b'
            },
            favColor:{
              main:grey[300]
            }
          }
          :{
            ali:{
              main:teal[500],
    
            },
            favColor:{
              main:grey[800]
            }
          }
        )
      },
})

export default getDesignTokens;
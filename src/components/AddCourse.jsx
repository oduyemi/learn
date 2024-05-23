import { Box } from "@mui/material";


export const AddCourse = ({ onAddCourse}) => {
    return(
        <Box className="flex justify-end">
            <button onClick={onAddCourse} className="bg-yellow-500 hover:bg-yellow-900 rounded-full w-5 h-5 flex items-center justify-center text-lg text-white"><span>+</span></button>
        </Box>
    )
}
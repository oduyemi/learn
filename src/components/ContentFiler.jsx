import { Box } from "@mui/material"
import { Link } from "react-router-dom";
import Button from "./elements/Button";


export const ContentFiller = () => {
    return(
        <Box className="grid text-center text-black place-content-center min-h-[400px] relative isolate  bg-white ">
            <h1 className="font-semibold text-4xl tracking-wide">
                Ready to Join the Pro
                <span><h1 className="text-yel inline">Gro</h1></span>wing community?
            </h1>
            <Link to="https://chat.whatsapp.com/CwXJQItHh3d6yviZlTa8Iz/">
                <Button className="text-white">WhatsApp Community</Button>
            </Link>
        </Box>
    )
}
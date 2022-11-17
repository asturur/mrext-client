import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import TvIcon from "@mui/icons-material/Tv";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import SpeakerIcon from "@mui/icons-material/Speaker";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TerminalIcon from "@mui/icons-material/Terminal";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";
import { SettingsPageId, useUIStateStore } from "../lib/store";
import VideoSettings from "./SettingsVideo";
import InputDevices from "./SettingsInputDevices";
import OSDMenuSettings from "./SettingsOSDMenu";
import CoresSettings from "./SettingsCore";
import Remote from "./SettingsRemote";

function SettingsPageLink(props: {
    page: SettingsPageId;
    text: string;
    icon: React.ReactNode;
}) {
    const setActiveSettingsPage = useUIStateStore(
        (state) => state.setActiveSettingsPage
    );

    return (
        <ListItem>
            <ListItemButton onClick={() => setActiveSettingsPage(props.page)}>
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.text} />
                <ArrowForwardIcon />
            </ListItemButton>
        </ListItem>
    );
}

function MainPage() {
    return (
        <List>
            <SettingsPageLink
                page={SettingsPageId.Video}
                text="Video"
                icon={<TvIcon />}
            />
            <SettingsPageLink
                page={SettingsPageId.Video}
                text="Audio"
                icon={<SpeakerIcon />}
            />
            <SettingsPageLink
                page={SettingsPageId.InputDevices}
                text="Input devices"
                icon={<SportsEsportsIcon />}
            />
            <SettingsPageLink
                page={SettingsPageId.OSDMenu}
                text="OSD and menu"
                icon={<WysiwygIcon />}
            />
            <SettingsPageLink
                page={SettingsPageId.Cores}
                text="Cores"
                icon={<DeveloperBoardIcon />}
            />
            <SettingsPageLink
                page={SettingsPageId.Video}
                text="System"
                icon={<TerminalIcon />}
            />
            <SettingsPageLink
                page={SettingsPageId.Remote}
                text="Remote"
                icon={<SettingsRemoteIcon />}
            />
        </List>
    );
}

export default function Settings() {
    const activeSettingsPage = useUIStateStore(
        (state) => state.activeSettingsPage
    );

    const page = (() => {
        switch (activeSettingsPage) {
            case SettingsPageId.Main:
                return <MainPage />;
            case SettingsPageId.Video:
                return <VideoSettings />;
            // case SettingsPageId.Audio:
            //     return <AudioPage />;
            case SettingsPageId.InputDevices:
                return <InputDevices />;
            case SettingsPageId.OSDMenu:
                return <OSDMenuSettings />;
            case SettingsPageId.Cores:
                return <CoresSettings />;
            // case SettingsPageId.System:
            //     return <SystemPage />;
            case SettingsPageId.Remote:
                return <Remote />;
        }
    })();

    return (
        <div>
            <div>{page}</div>
            {/* <Stack
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#E6D0BB",
                    borderTop: 1,
                    borderColor: "divider",
                    boxShadow: 3,
                    zIndex: 1,
                }}
                spacing={2}
                direction="row"
                justifyContent="center"
                padding={1}
            >
                <Button
                    variant="outlined"
                    color="success"
                    disabled={false}
                    startIcon={<SaveIcon />}
                >
                    Apply settings
                </Button>
                <Button variant="text" color="error" disabled={false}>
                    Discard changes
                </Button>
            </Stack> */}
        </div>
    );
}

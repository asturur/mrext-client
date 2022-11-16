import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import PlayDisabledIcon from "@mui/icons-material/PlayDisabled";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import ControlApi from "../lib/api";
import { Typography } from "@mui/material";

import { UseQueryResult } from "@tanstack/react-query";
import { ServerStatus } from "../lib/models";

export default function Music(props: {
    serverStatus: UseQueryResult<ServerStatus, unknown>;
}) {
    const api = new ControlApi();

    const playlists = useQuery({
        queryKey: ["music", "playlists"],
        queryFn: api.getMusicPlaylists,
    });

    const playMusic = useMutation({
        mutationFn: api.playMusic,
    });

    const stopMusic = useMutation({
        mutationFn: api.stopMusic,
    });

    const nextMusic = useMutation({
        mutationFn: api.nextMusic,
    });

    const setPlayback = useMutation({
        mutationFn: api.setMusicPlayback,
    });

    const setPlaylist = useMutation({
        mutationFn: api.setMusicPlaylist,
    });

    if (props.serverStatus.isLoading) {
        return <div></div>;
    }

    if (props.serverStatus.data?.musicService.running === false) {
        return (
            <div>
                <Typography sx={{ textAlign: "center" }}>
                    There was a problem contacting the BGM service.
                    <br />
                    <br />
                    Music requires{" "}
                    <a
                        href="https://github.com/wizzomafizzo/MiSTer_BGM"
                        target="_blank"
                        rel="noreferrer"
                    >
                        BGM
                    </a>{" "}
                    to be configured and running on your MiSTer. If you don't
                    have BGM already, please install it and reload this page.
                </Typography>
            </div>
        );
    }

    return (
        <div style={{margin: "10px"}}>
            <div
                style={{
                    marginBottom: "8px",
                    textAlign: "center",
                }}
            >
                {props.serverStatus.data?.musicService.track !== ""
                    ? props.serverStatus.data?.musicService.track.replace(
                          /\.[^/.]+$/,
                          ""
                      )
                    : "—"}
            </div>
            <div style={{ marginBottom: "0.5em", textAlign: "center" }}>
                {props.serverStatus.data?.musicService.playing ? (
                    <Button
                        variant="contained"
                        onClick={() => stopMusic.mutate()}
                        sx={{ marginRight: "0.5em" }}
                    >
                        <StopIcon />
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        onClick={() => playMusic.mutate()}
                        sx={{ marginRight: "0.5em" }}
                    >
                        <PlayArrowIcon />
                    </Button>
                )}
                <Button variant="contained" onClick={() => nextMusic.mutate()}>
                    <SkipNextIcon />
                </Button>
            </div>
            <div style={{ textAlign: "center", marginBottom: "1em" }}>
                <ButtonGroup variant="contained">
                    <Button
                        variant="contained"
                        onClick={() => setPlayback.mutate("random")}
                        disabled={
                            props.serverStatus.data?.musicService.playback ===
                            "random"
                        }
                    >
                        <ShuffleIcon />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setPlayback.mutate("loop")}
                        disabled={
                            props.serverStatus.data?.musicService.playback ===
                            "loop"
                        }
                    >
                        <RepeatOneIcon />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setPlayback.mutate("disabled")}
                        disabled={
                            props.serverStatus.data?.musicService.playback ===
                            "disabled"
                        }
                    >
                        <PlayDisabledIcon />
                    </Button>
                </ButtonGroup>
            </div>
            <div style={{paddingTop: 10}}>
                <Typography variant="h6" sx={{textAlign: "center"}}>Playlists</Typography>
                <List>
                    {playlists.data?.slice().map((playlist) => (
                        <ListItem key={playlist} style={{padding: 0}}>
                            <ListItemButton
                                onClick={() => setPlaylist.mutate(playlist)}
                                disabled={
                                    playlist ===
                                    props.serverStatus.data?.musicService
                                        .playlist
                                }
                            >
                                <ListItemText
                                    primary={playlist === "none" ? "None" : playlist}
                                />
                                <SwapHorizIcon />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
}

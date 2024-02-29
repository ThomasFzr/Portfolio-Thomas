import React from "react";
import Particles from "@tsparticles/react";
import ParticleConfig from "./config/Particle-config";

export default function ParticleBackground(){
    return (
        <Particles params={ParticleConfig}/>
    );
}
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

const Canvas = () => {
    return (
        <Box
            bg="white"
            width="40%"
            height="40%"
        >
            <div style={{ background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' fill-opacity=\'.25\'%3E%3Crect x=\'15\' width=\'15\' height=\'15\' fill=\'%23888888\' /%3E%3Crect y=\'15\' width=\'15\' height=\'15\' fill=\'%23888888\' /%3E%3C/svg%3E")', backgroundSize: '40px 40px' }}>
                <Stage width={500} height={400}>
                    <Layer>
                    </Layer>
                </Stage>
            </div>
        </Box >
    );
};

export default Canvas;

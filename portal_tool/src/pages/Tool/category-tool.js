import React from 'react';
import CateGory from '../../components/ToolCategory/Tool-cat.component';
import ApiSub from '../../components/ToolAPI/Tool-api.component';
import './tool.styles.scss';

const AddTool = () => (
    <div className='tool'>
        <CateGory/>
        <ApiSub/>
    </div>
);

export default AddTool;
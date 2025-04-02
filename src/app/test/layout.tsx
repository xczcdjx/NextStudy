import React from "react";
// 组件layout
export default ({children}:Readonly<{
    children:React.ReactNode
}>) => {
    return (
        <div>
            <h3>我是test页面布局</h3>
            {children}
        </div>
    );
};

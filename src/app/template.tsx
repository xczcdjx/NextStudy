// 当layout和template同时存在时会形成外层layout,里面template
export default ({children})=>(
    <div>
        {/*<p>我是template</p>*/}
        {children}
    </div>
)

interface IMessage {
    children: React.ReactNode;
}
function Message({ children }:IMessage) {
    return <div>{children}</div>;
  }
  
  export default Message;
  
  // children prop =>
  
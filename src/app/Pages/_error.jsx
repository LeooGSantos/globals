function CustomError({ statusCode }) {
    return (
      <div>
        {statusCode
          ? `Ocorreu um erro no servidor: ${statusCode}`
          : 'Ocorreu um erro no cliente'}
      </div>
    );
  }
  
  CustomError.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default CustomError;
  
import { useNavigate, useLocation } from '@reach/router';
import { useQueryParams } from 'q3-ui-queryparams';

export default () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const qp = useQueryParams();

  return (increment) => (e) => {
    e.preventDefault();

    const decoded = qp.decode(search);
    const encoded = qp.encode(decoded);
    const page = Number(decoded.page);
    const char = encoded === '?' ? '' : '&';

    return navigate(
      `${encoded}${char}page=${
        !Number.isNaN(page) ? page + increment : increment
      }`,
    );
  };
};

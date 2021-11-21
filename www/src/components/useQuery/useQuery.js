import React from 'react';
import { map, pick, isEqual } from 'lodash';
import { useQueryParams } from 'q3-ui-queryparams';
import { useNavigate, useLocation } from '@reach/router';

const useQuery = () => {
  const { search } = useLocation();
  const qp = useQueryParams();
  const navigate = useNavigate();
  const decoded = qp.decode(search);
  const filters = pick(decoded, ['isCurrent', 'isMine']);
  const sort = String(decoded.sort);

  const reverseFilter = (e, newState) =>
    navigate(
      qp.encode({
        ...decoded,
        [e.target.name]: newState,
      }),
    );

  const reverseSort = () =>
    navigate(
      qp.encode({
        ...decoded,
        sort: String(decoded.sort).startsWith('-')
          ? 'startsOn'
          : `-startsOn`,
      }),
    );

  return {
    ...filters,
    reverseFilter,
    reverseSort,
    search,
    sort,
  };
};

export default useQuery;

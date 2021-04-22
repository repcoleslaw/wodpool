import minimatch from 'minimatch';

const convertIntoArray = (a) => {
  let out = [];
  if (Array.isArray(a)) out = a;
  if (typeof a === 'string') out = a.split(', ');
  return out.map((b) => b.trim());
};

export const filterbyColl = (a, name) =>
  a.filter((v) => v.coll.localeCompare(name) === 0);

export const findByOp = (a, op) =>
  a && a.length
    ? a.find(
        (grant) =>
          // the default for undefined inClient values is true
          // this differs from the Read op, which is somewhere else
          grant.op === op && grant.inClient !== false,
      )
    : null;

export const isDefined = (arg) =>
  arg !== undefined && arg !== null;

export const satisfiesOwnership = (grant, id, createdBy) =>
  grant &&
  grant.ownership === 'Own' &&
  grant.op !== 'Create'
    ? id === createdBy
    : true;

export const hasField = (grant, name) =>
  grant && grant.fields
    ? convertIntoArray(grant.fields).every((i) => {
        try {
          if (i === '*') return true;
          return minimatch(name, i);
        } catch (e) {
          return true;
        }
      })
    : false;

export const invoke = (fn, args) =>
  typeof fn === 'function' ? fn(args) : null;
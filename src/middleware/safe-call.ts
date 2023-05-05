import type {Context} from "hono";
import {handleApiError} from '../utils/error-util';
import {storage} from "../utils/global-ctx";

type SafeCallHandler = (c: Context) => Promise<any>;
type SafeCallResponse = (c: Context) => Promise<void>;

export default function safeCall(fn: SafeCallHandler): SafeCallResponse  {
   return async (c: Context) => {
      try {
         const rs = await storage.run({c}, () => fn(c))
         console.log('rs', rs)
         c.json({data: rs}) // <- finalize but somehow not work
      } catch(e) {
         handleApiError(e, c);
      }
   }
}

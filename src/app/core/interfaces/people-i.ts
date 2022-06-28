import { StateClient } from "../enums/state-people";

export interface ClientI {
    "name": string;
    "state": StateClient;
    "tva": number;
    "id": number;
    "totalCaHt": number;
    "comment": string;
    totalTtc(): number;
}

// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_javascript,// @generated from protobuf file "QueryRegionListHttpRsp.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RegionSimpleInfo } from "./RegionSimpleInfo";
/**
 * @generated from protobuf message QueryRegionListHttpRsp
 */
export interface QueryRegionListHttpRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated RegionSimpleInfo region_list = 2;
     */
    regionList: RegionSimpleInfo[];
    /**
     * @generated from protobuf field: bytes client_secret_key = 5;
     */
    clientSecretKey: Uint8Array;
    /**
     * @generated from protobuf field: bytes client_custom_config_encrypted = 6;
     */
    clientCustomConfigEncrypted: Uint8Array;
    /**
     * @generated from protobuf field: bool enable_login_pc = 7;
     */
    enableLoginPc: boolean;
}
declare class QueryRegionListHttpRsp$Type extends MessageType<QueryRegionListHttpRsp> {
    constructor();
    create(value?: PartialMessage<QueryRegionListHttpRsp>): QueryRegionListHttpRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryRegionListHttpRsp): QueryRegionListHttpRsp;
    internalBinaryWrite(message: QueryRegionListHttpRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message QueryRegionListHttpRsp
 */
export declare const QueryRegionListHttpRsp: QueryRegionListHttpRsp$Type;
export {};

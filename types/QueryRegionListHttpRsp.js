"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryRegionListHttpRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RegionSimpleInfo_1 = require("./RegionSimpleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class QueryRegionListHttpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QueryRegionListHttpRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "region_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RegionSimpleInfo_1.RegionSimpleInfo },
            { no: 5, name: "client_secret_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "client_custom_config_encrypted", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 7, name: "enable_login_pc", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, regionList: [], clientSecretKey: new Uint8Array(0), clientCustomConfigEncrypted: new Uint8Array(0), enableLoginPc: false };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated RegionSimpleInfo region_list */ 2:
                    message.regionList.push(RegionSimpleInfo_1.RegionSimpleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bytes client_secret_key */ 5:
                    message.clientSecretKey = reader.bytes();
                    break;
                case /* bytes client_custom_config_encrypted */ 6:
                    message.clientCustomConfigEncrypted = reader.bytes();
                    break;
                case /* bool enable_login_pc */ 7:
                    message.enableLoginPc = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated RegionSimpleInfo region_list = 2; */
        for (let i = 0; i < message.regionList.length; i++)
            RegionSimpleInfo_1.RegionSimpleInfo.internalBinaryWrite(message.regionList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bytes client_secret_key = 5; */
        if (message.clientSecretKey.length)
            writer.tag(5, runtime_1.WireType.LengthDelimited).bytes(message.clientSecretKey);
        /* bytes client_custom_config_encrypted = 6; */
        if (message.clientCustomConfigEncrypted.length)
            writer.tag(6, runtime_1.WireType.LengthDelimited).bytes(message.clientCustomConfigEncrypted);
        /* bool enable_login_pc = 7; */
        if (message.enableLoginPc !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.enableLoginPc);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryRegionListHttpRsp
 */
exports.QueryRegionListHttpRsp = new QueryRegionListHttpRsp$Type();

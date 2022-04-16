"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCurrRegionHttpRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RegionInfo_1 = require("./RegionInfo");
const StopServerInfo_1 = require("./StopServerInfo");
const ForceUpdateInfo_1 = require("./ForceUpdateInfo");
// @generated message type with reflection information, may provide speed optimized methods
class QueryCurrRegionHttpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QueryCurrRegionHttpRsp", [
            { no: 4, name: "force_udpate", kind: "message", oneof: "detail", T: () => ForceUpdateInfo_1.ForceUpdateInfo },
            { no: 5, name: "stop_server", kind: "message", oneof: "detail", T: () => StopServerInfo_1.StopServerInfo },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "region_info", kind: "message", T: () => RegionInfo_1.RegionInfo },
            { no: 11, name: "client_secret_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 12, name: "region_custom_config_encrypted", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "client_region_custom_config_encrypted", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined }, retcode: 0, msg: "", clientSecretKey: new Uint8Array(0), regionCustomConfigEncrypted: new Uint8Array(0), clientRegionCustomConfigEncrypted: new Uint8Array(0) };
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
                case /* ForceUpdateInfo force_udpate */ 4:
                    message.detail = {
                        oneofKind: "forceUdpate",
                        forceUdpate: ForceUpdateInfo_1.ForceUpdateInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.forceUdpate)
                    };
                    break;
                case /* StopServerInfo stop_server */ 5:
                    message.detail = {
                        oneofKind: "stopServer",
                        stopServer: StopServerInfo_1.StopServerInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.stopServer)
                    };
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* string msg */ 2:
                    message.msg = reader.string();
                    break;
                case /* RegionInfo region_info */ 3:
                    message.regionInfo = RegionInfo_1.RegionInfo.internalBinaryRead(reader, reader.uint32(), options, message.regionInfo);
                    break;
                case /* bytes client_secret_key */ 11:
                    message.clientSecretKey = reader.bytes();
                    break;
                case /* bytes region_custom_config_encrypted */ 12:
                    message.regionCustomConfigEncrypted = reader.bytes();
                    break;
                case /* bytes client_region_custom_config_encrypted */ 13:
                    message.clientRegionCustomConfigEncrypted = reader.bytes();
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
        /* ForceUpdateInfo force_udpate = 4; */
        if (message.detail.oneofKind === "forceUdpate")
            ForceUpdateInfo_1.ForceUpdateInfo.internalBinaryWrite(message.detail.forceUdpate, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* StopServerInfo stop_server = 5; */
        if (message.detail.oneofKind === "stopServer")
            StopServerInfo_1.StopServerInfo.internalBinaryWrite(message.detail.stopServer, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* string msg = 2; */
        if (message.msg !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.msg);
        /* RegionInfo region_info = 3; */
        if (message.regionInfo)
            RegionInfo_1.RegionInfo.internalBinaryWrite(message.regionInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bytes client_secret_key = 11; */
        if (message.clientSecretKey.length)
            writer.tag(11, runtime_1.WireType.LengthDelimited).bytes(message.clientSecretKey);
        /* bytes region_custom_config_encrypted = 12; */
        if (message.regionCustomConfigEncrypted.length)
            writer.tag(12, runtime_1.WireType.LengthDelimited).bytes(message.regionCustomConfigEncrypted);
        /* bytes client_region_custom_config_encrypted = 13; */
        if (message.clientRegionCustomConfigEncrypted.length)
            writer.tag(13, runtime_1.WireType.LengthDelimited).bytes(message.clientRegionCustomConfigEncrypted);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryCurrRegionHttpRsp
 */
exports.QueryCurrRegionHttpRsp = new QueryCurrRegionHttpRsp$Type();

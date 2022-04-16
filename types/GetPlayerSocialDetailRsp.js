"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerSocialDetailRsp = exports.GetPlayerSocialDetailRsp_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SocialDetail_1 = require("./SocialDetail");
/**
 * @generated from protobuf enum GetPlayerSocialDetailRsp.CmdId
 */
var GetPlayerSocialDetailRsp_CmdId;
(function (GetPlayerSocialDetailRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerSocialDetailRsp_CmdId[GetPlayerSocialDetailRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerSocialDetailRsp_CmdId[GetPlayerSocialDetailRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerSocialDetailRsp_CmdId[GetPlayerSocialDetailRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4079;
     */
    GetPlayerSocialDetailRsp_CmdId[GetPlayerSocialDetailRsp_CmdId["CMD_ID"] = 4079] = "CMD_ID";
})(GetPlayerSocialDetailRsp_CmdId = exports.GetPlayerSocialDetailRsp_CmdId || (exports.GetPlayerSocialDetailRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerSocialDetailRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetPlayerSocialDetailRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "detail_data", kind: "message", T: () => SocialDetail_1.SocialDetail }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
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
                case /* SocialDetail detail_data */ 2:
                    message.detailData = SocialDetail_1.SocialDetail.internalBinaryRead(reader, reader.uint32(), options, message.detailData);
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
        /* SocialDetail detail_data = 2; */
        if (message.detailData)
            SocialDetail_1.SocialDetail.internalBinaryWrite(message.detailData, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerSocialDetailRsp
 */
exports.GetPlayerSocialDetailRsp = new GetPlayerSocialDetailRsp$Type();

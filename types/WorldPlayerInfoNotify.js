"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldPlayerInfoNotify = exports.WorldPlayerInfoNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
/**
 * @generated from protobuf enum WorldPlayerInfoNotify.CmdId
 */
var WorldPlayerInfoNotify_CmdId;
(function (WorldPlayerInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
    /**
     * @generated from protobuf enum value: CMD_ID = 3109;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["CMD_ID"] = 3109] = "CMD_ID";
})(WorldPlayerInfoNotify_CmdId = exports.WorldPlayerInfoNotify_CmdId || (exports.WorldPlayerInfoNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WorldPlayerInfoNotify", [
            { no: 1, name: "player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 2, name: "player_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playerInfoList: [], playerUidList: [] };
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
                case /* repeated OnlinePlayerInfo player_info_list */ 1:
                    message.playerInfoList.push(OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 player_uid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.playerUidList.push(reader.uint32());
                    else
                        message.playerUidList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated OnlinePlayerInfo player_info_list = 1; */
        for (let i = 0; i < message.playerInfoList.length; i++)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.playerInfoList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 player_uid_list = 2; */
        if (message.playerUidList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.playerUidList.length; i++)
                writer.uint32(message.playerUidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorldPlayerInfoNotify
 */
exports.WorldPlayerInfoNotify = new WorldPlayerInfoNotify$Type();

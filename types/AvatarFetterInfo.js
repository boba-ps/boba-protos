"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFetterInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FetterData_1 = require("./FetterData");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFetterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarFetterInfo", [
            { no: 1, name: "exp_number", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "exp_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "open_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "finish_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "rewarded_fetter_level_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "fetter_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FetterData_1.FetterData }
        ]);
    }
    create(value) {
        const message = { expNumber: 0, expLevel: 0, openIdList: [], finishIdList: [], rewardedFetterLevelList: [], fetterList: [] };
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
                case /* uint32 exp_number */ 1:
                    message.expNumber = reader.uint32();
                    break;
                case /* uint32 exp_level */ 2:
                    message.expLevel = reader.uint32();
                    break;
                case /* repeated uint32 open_id_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openIdList.push(reader.uint32());
                    else
                        message.openIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 finish_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishIdList.push(reader.uint32());
                    else
                        message.finishIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 rewarded_fetter_level_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardedFetterLevelList.push(reader.uint32());
                    else
                        message.rewardedFetterLevelList.push(reader.uint32());
                    break;
                case /* repeated FetterData fetter_list */ 6:
                    message.fetterList.push(FetterData_1.FetterData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 exp_number = 1; */
        if (message.expNumber !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.expNumber);
        /* uint32 exp_level = 2; */
        if (message.expLevel !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.expLevel);
        /* repeated uint32 open_id_list = 3; */
        if (message.openIdList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.openIdList.length; i++)
                writer.uint32(message.openIdList[i]);
            writer.join();
        }
        /* repeated uint32 finish_id_list = 4; */
        if (message.finishIdList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishIdList.length; i++)
                writer.uint32(message.finishIdList[i]);
            writer.join();
        }
        /* repeated uint32 rewarded_fetter_level_list = 5; */
        if (message.rewardedFetterLevelList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.rewardedFetterLevelList.length; i++)
                writer.uint32(message.rewardedFetterLevelList[i]);
            writer.join();
        }
        /* repeated FetterData fetter_list = 6; */
        for (let i = 0; i < message.fetterList.length; i++)
            FetterData_1.FetterData.internalBinaryWrite(message.fetterList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarFetterInfo
 */
exports.AvatarFetterInfo = new AvatarFetterInfo$Type();

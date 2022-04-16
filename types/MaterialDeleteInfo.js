"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialDeleteInfo_DelayWeekCountDownDelete = exports.MaterialDeleteInfo_DateTimeDelete = exports.MaterialDeleteInfo_CountDownDelete = exports.MaterialDeleteInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MaterialDeleteInfo", [
            { no: 2, name: "count_down_delete", kind: "message", oneof: "deleteInfo", T: () => exports.MaterialDeleteInfo_CountDownDelete },
            { no: 3, name: "date_delete", kind: "message", oneof: "deleteInfo", T: () => exports.MaterialDeleteInfo_DateTimeDelete },
            { no: 4, name: "delay_week_count_down_delete", kind: "message", oneof: "deleteInfo", T: () => exports.MaterialDeleteInfo_DelayWeekCountDownDelete },
            { no: 1, name: "has_delete_config", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { deleteInfo: { oneofKind: undefined }, hasDeleteConfig: false };
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
                case /* MaterialDeleteInfo.CountDownDelete count_down_delete */ 2:
                    message.deleteInfo = {
                        oneofKind: "countDownDelete",
                        countDownDelete: exports.MaterialDeleteInfo_CountDownDelete.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo.countDownDelete)
                    };
                    break;
                case /* MaterialDeleteInfo.DateTimeDelete date_delete */ 3:
                    message.deleteInfo = {
                        oneofKind: "dateDelete",
                        dateDelete: exports.MaterialDeleteInfo_DateTimeDelete.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo.dateDelete)
                    };
                    break;
                case /* MaterialDeleteInfo.DelayWeekCountDownDelete delay_week_count_down_delete */ 4:
                    message.deleteInfo = {
                        oneofKind: "delayWeekCountDownDelete",
                        delayWeekCountDownDelete: exports.MaterialDeleteInfo_DelayWeekCountDownDelete.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo.delayWeekCountDownDelete)
                    };
                    break;
                case /* bool has_delete_config */ 1:
                    message.hasDeleteConfig = reader.bool();
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
        /* MaterialDeleteInfo.CountDownDelete count_down_delete = 2; */
        if (message.deleteInfo.oneofKind === "countDownDelete")
            exports.MaterialDeleteInfo_CountDownDelete.internalBinaryWrite(message.deleteInfo.countDownDelete, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MaterialDeleteInfo.DateTimeDelete date_delete = 3; */
        if (message.deleteInfo.oneofKind === "dateDelete")
            exports.MaterialDeleteInfo_DateTimeDelete.internalBinaryWrite(message.deleteInfo.dateDelete, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MaterialDeleteInfo.DelayWeekCountDownDelete delay_week_count_down_delete = 4; */
        if (message.deleteInfo.oneofKind === "delayWeekCountDownDelete")
            exports.MaterialDeleteInfo_DelayWeekCountDownDelete.internalBinaryWrite(message.deleteInfo.delayWeekCountDownDelete, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool has_delete_config = 1; */
        if (message.hasDeleteConfig !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.hasDeleteConfig);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteInfo
 */
exports.MaterialDeleteInfo = new MaterialDeleteInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_CountDownDelete$Type extends runtime_5.MessageType {
    constructor() {
        super("MaterialDeleteInfo.CountDownDelete", [
            { no: 1, name: "delete_time_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "config_count_down_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { deleteTimeNumMap: {}, configCountDownTime: 0 };
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
                case /* map<uint32, uint32> delete_time_num_map */ 1:
                    this.binaryReadMap1(message.deleteTimeNumMap, reader, options);
                    break;
                case /* uint32 config_count_down_time */ 2:
                    message.configCountDownTime = reader.uint32();
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
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MaterialDeleteInfo.CountDownDelete.delete_time_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> delete_time_num_map = 1; */
        for (let k of Object.keys(message.deleteTimeNumMap))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.deleteTimeNumMap[k]).join();
        /* uint32 config_count_down_time = 2; */
        if (message.configCountDownTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configCountDownTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteInfo.CountDownDelete
 */
exports.MaterialDeleteInfo_CountDownDelete = new MaterialDeleteInfo_CountDownDelete$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_DateTimeDelete$Type extends runtime_5.MessageType {
    constructor() {
        super("MaterialDeleteInfo.DateTimeDelete", [
            { no: 1, name: "delete_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { deleteTime: 0 };
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
                case /* uint32 delete_time */ 1:
                    message.deleteTime = reader.uint32();
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
        /* uint32 delete_time = 1; */
        if (message.deleteTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.deleteTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteInfo.DateTimeDelete
 */
exports.MaterialDeleteInfo_DateTimeDelete = new MaterialDeleteInfo_DateTimeDelete$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_DelayWeekCountDownDelete$Type extends runtime_5.MessageType {
    constructor() {
        super("MaterialDeleteInfo.DelayWeekCountDownDelete", [
            { no: 1, name: "delete_time_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "config_delay_week", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_count_down_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { deleteTimeNumMap: {}, configDelayWeek: 0, configCountDownTime: 0 };
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
                case /* map<uint32, uint32> delete_time_num_map */ 1:
                    this.binaryReadMap1(message.deleteTimeNumMap, reader, options);
                    break;
                case /* uint32 config_delay_week */ 2:
                    message.configDelayWeek = reader.uint32();
                    break;
                case /* uint32 config_count_down_time */ 3:
                    message.configCountDownTime = reader.uint32();
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
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MaterialDeleteInfo.DelayWeekCountDownDelete.delete_time_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> delete_time_num_map = 1; */
        for (let k of Object.keys(message.deleteTimeNumMap))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.deleteTimeNumMap[k]).join();
        /* uint32 config_delay_week = 2; */
        if (message.configDelayWeek !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configDelayWeek);
        /* uint32 config_count_down_time = 3; */
        if (message.configCountDownTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.configCountDownTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteInfo.DelayWeekCountDownDelete
 */
exports.MaterialDeleteInfo_DelayWeekCountDownDelete = new MaterialDeleteInfo_DelayWeekCountDownDelete$Type();

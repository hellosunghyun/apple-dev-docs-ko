---
source_path: "documentation/AVFoundation/avcapturetimecodegenerator.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturetimecodegenerator:0000:0001">AVCaptureTimecodeGenerator</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodegenerator:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodegenerator:0002:0001">정밀한 비디오 및 오디오 동기화를 위해 다양한 소스에서 timecode 데이터를 생성하고 동기화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodegenerator:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegenerator:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegenerator:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegenerator:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegenerator:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegenerator:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVCaptureTimecodeGenerator
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><a href="avcapturetimecodegenerator.md">@@TOKEN_0@@</a> 클래스는 프레임 카운팅, 시스템 시계 동기화, MIDI timecode 입력(MTC)을 비롯한 여러 timecode 소스를 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">정밀한 timecode 메타데이터가 필요한 재생, 녹화 또는 기타 시간 민감 작업에 적합합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">원하는 timecode 소스를 구성하려면 <a href="avcapturetimecodegenerator/startsynchronization(source:">@@TOKEN_0@@</a>.md) 메서드를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:generating-timecode:0011:0001">타임코드 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:generating-timecode:0012:0001"><a href="avcapturetimecodegenerator/generateinitialtimecode.md">func generateInitialTimecode() -&gt; AVCaptureTimecode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:generating-timecode:0013:0001">시퀀스의 첫 번째 timecode가 되도록 의도된 초기 timecode를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-sources:0014:0001">소스 관리</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-sources:0015:0001"><a href="avcapturetimecodegenerator/currentsource.md">var currentSource: AVCaptureTimecode.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-sources:0016:0001">정확한 timecode 생성을 위해 클록 동기화를 유지하는 데 사용되는 <a href="avcapturetimecodegenerator.md">@@TOKEN_0@@</a>의 활성 timecode 소스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-sources:0017:0001">[var availableSources: [AVCaptureTimecode.Source]](avcapturetimecodegenerator/availablesources.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-sources:0018:0001">timecode 생성기에서 사용할 수 있는 timecode 동기화 소스 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-sources:0019:0001"><a href="avcapturetimecodegenerator/framecountsource.md">class var frameCountSource: AVCaptureTimecode.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-sources:0020:0001">내부 또는 외부 동기화와 독립적으로 작동하는 프레임 카운터 timecode 소스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-sources:0021:0001"><a href="avcapturetimecodegenerator/realtimeclocksource.md">class var realTimeClockSource: AVCaptureTimecode.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-sources:0022:0001">실시간 시스템 시계에 동기화된 미리 정의된 timecode 소스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-sources:0023:0001"><a href="avcapturetimecodegenerator/startsynchronization(source:">func startSynchronization(source: AVCaptureTimecode.Source)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-sources:0024:0001">지정된 timecode 소스와 생성기를 동기화합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-the-generator:0025:0001">생성기 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-generator:0026:0001"><a href="avcapturetimecodegenerator/synchronizationtimeout.md">var synchronizationTimeout: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-generator:0027:0001">타임아웃되기 전에 소스 동기화 시도에서 허용되는 최대 시간 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-generator:0028:0001"><a href="avcapturetimecodegenerator/timecodealignmentoffset.md">var timecodeAlignmentOffset: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-generator:0029:0001">생성된 timecode에 적용되는 초 단위 시간 오프셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-generator:0030:0001"><a href="avcapturetimecodegenerator/timecodeframeduration.md">var timecodeFrameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-generator:0031:0001">생성기가 timecode를 생성할 때 사용할 프레임 지속 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-generator:0032:0001"><a href="avcapturetimecodegenerator/setdelegate(_:queue:">func setDelegate((any AVCaptureTimecodeGeneratorDelegate)?, queue: dispatch_queue_t?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-generator:0033:0001">실시간 timecode 업데이트를 수신하는 delegate를 할당하고 콜백에 대한 큐를 지정합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:handling-delegate-callbacks:0034:0001">delegate 콜백 처리</span>

- <span class="ko-segment" data-segment-id="seg:list:handling-delegate-callbacks:0035:0001"><a href="avcapturetimecodegenerator/delegate.md">var delegate: (any AVCaptureTimecodeGeneratorDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:handling-delegate-callbacks:0036:0001">timecode 생성기에서 timecode 업데이트를 수신하는 delegate입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:handling-delegate-callbacks:0037:0001"><a href="avcapturetimecodegenerator/delegatecallbackqueue.md">var delegateCallbackQueue: dispatch_queue_t?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:handling-delegate-callbacks:0038:0001">delegate 콜백이 호출되는 dispatch queue입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0039:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0040:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0041:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0042:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0043:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0043:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0043:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0043:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0043:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0043:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0044:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="avcapturetimecodegeneratordelegate.md">protocol AVCaptureTimecodeGeneratorDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">timecode 생성기에서 실시간 timecode 업데이트 및 오류 알림을 수신하는 프로토콜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="avcapturetimecodegenerator/synchronizationstatus.md">AVCaptureTimecodeGenerator.SynchronizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">timecode 생성기의 동기화 상태를 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0049:0001"><a href="avcapturetimecode/source.md">AVCaptureTimecode.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">timecode 생성기가 동기화할 수 있는 timecode 소스를 설명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="avcapturetimecode/sourcetype-swift.enum.md">AVCaptureTimecode.SourceType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">timecode 생성기를 사용해 timecode를 생성할 때 가능한 소스를 정의합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0053:0001"><a href="avcapturetimecode.md">struct AVCaptureTimecode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">이 구조체는 SMPTE 표준을 준수하며 비디오 또는 오디오 동기화를 위한 정밀한 시간 정보와 관련 타임스탬프를 정의하는 timecode를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="avcapturetimecode/advanced(_:by:">static func advanced(AVCaptureTimecode, by: Int64) -&gt; AVCaptureTimecode</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">주어진 timecode에 지정한 프레임 수를 더해 초/분/시 오버플로우를 처리하면서 새 timecode를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="avcapturetimecode/createmetadatasamplebuffer(from:associatedwithpresentationtimestamp:">static func createMetadataSampleBuffer(from: AVCaptureTimecode, associatedWithPresentationTimeStamp: CMTime) -&gt; Unmanaged&lt;CMSampleBuffer&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">비디오 트랙 통합을 위한 Timecode Media Description 메타데이터가 포함된 sample buffer를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0059:0001"><a href="avcapturetimecode/createmetadatasamplebuffer(from:forduration:">static func createMetadataSampleBuffer(from: AVCaptureTimecode, forDuration: CMTime) -&gt; Unmanaged&lt;CMSampleBuffer&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">지정한 기간 동안 Timecode Media Description 메타데이터가 포함된 sample buffer를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0062:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator">View on Apple Developer</a>*</span>

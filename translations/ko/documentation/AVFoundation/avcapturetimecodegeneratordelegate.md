---
source_path: "documentation/AVFoundation/avcapturetimecodegeneratordelegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturetimecodegeneratordelegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturetimecodegeneratordelegate:0000:0001">AVCaptureTimecodeGeneratorDelegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodegeneratordelegate:0001:0001">**Framework**: AVFoundation **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodegeneratordelegate:0002:0001">timecode 생성기에서 실시간 timecode 업데이트와 오류 알림을 수신하기 위한 프로토콜입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodegeneratordelegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegeneratordelegate:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegeneratordelegate:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegeneratordelegate:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegeneratordelegate:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodegeneratordelegate:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AVCaptureTimecodeGeneratorDelegate : NSObjectProtocol
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:responding-to-timecode-events:0008:0001">시간코드 이벤트 대응</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-timecode-events:0009:0001"><a href="avcapturetimecodegeneratordelegate/timecodegenerator(_:didreceiveupdate:from:">func timecodeGenerator(AVCaptureTimecodeGenerator, didReceiveUpdate: AVCaptureTimecode, from: AVCaptureTimecode.Source)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-timecode-events:0010:0001">지정한 소스에서 새롭고 정렬되지 않은 timecode가 파싱되면 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-timecode-events:0011:0001">[func timecodeGenerator(AVCaptureTimecodeGenerator, didUpdateAvailableSources: [AVCaptureTimecode.Source])](avcapturetimecodegeneratordelegate/timecodegenerator(_:didupdateavailablesources:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-timecode-events:0012:0001">사용 가능한 timecode 동기화 소스 목록이 업데이트되면 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-timecode-events:0013:0001"><a href="avcapturetimecodegeneratordelegate/timecodegenerator(_:transitionedto:for:">func timecodeGenerator(AVCaptureTimecodeGenerator, transitionedTo: AVCaptureTimecodeGenerator.SynchronizationStatus, for: AVCaptureTimecode.Source)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-timecode-events:0014:0001">timecode 소스의 동기화 상태가 변경되면 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-timecode-events:0015:0001"><a href="avcapturetimecodegenerator/synchronizationstatus.md">AVCaptureTimecodeGenerator.SynchronizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-timecode-events:0016:0001">timecode 생성기의 동기화 상태를 정의하는 상수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0018:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturetimecodegenerator.md">class AVCaptureTimecodeGenerator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">정밀한 비디오 및 오디오 동기화를 위해 다양한 소스에서 timecode 데이터를 생성하고 동기화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturetimecodegenerator/synchronizationstatus.md">AVCaptureTimecodeGenerator.SynchronizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">timecode 생성기의 동기화 상태를 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturetimecode/source.md">AVCaptureTimecode.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">timecode 생성기가 동기화할 수 있는 timecode 소스를 설명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturetimecode/sourcetype-swift.enum.md">AVCaptureTimecode.SourceType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">timecode 생성기를 사용하여 timecode를 생성할 때의 가능한 소스를 정의합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcapturetimecode.md">struct AVCaptureTimecode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">이 구조체는 SMPTE 표준을 준수하는 timecode로, 비디오 또는 오디오 동기화를 위해 정밀한 시간 정보와 관련 타임스탬프를 정의합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avcapturetimecode/advanced(_:by:">static func advanced(AVCaptureTimecode, by: Int64) -&gt; AVCaptureTimecode</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">주어진 timecode에 지정된 프레임 수를 추가하여 새 timecode를 생성하고 초, 분, 시간의 오버플로우를 처리합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avcapturetimecode/createmetadatasamplebuffer(from:associatedwithpresentationtimestamp:">static func createMetadataSampleBuffer(from: AVCaptureTimecode, associatedWithPresentationTimeStamp: CMTime) -&gt; Unmanaged&lt;CMSampleBuffer&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">비디오 트랙 통합을 위해 Timecode Media Description 메타데이터를 포함하는 샘플 버퍼를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avcapturetimecode/createmetadatasamplebuffer(from:forduration:">static func createMetadataSampleBuffer(from: AVCaptureTimecode, forDuration: CMTime) -&gt; Unmanaged&lt;CMSampleBuffer&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">지정된 기간에 대한 Timecode Media Description 메타데이터를 포함하는 샘플 버퍼를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturetimecodegeneratordelegate">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcaptureaudiofileoutput.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcaptureaudiofileoutput:0000:0001">AVCaptureAudioFileOutput</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptureaudiofileoutput:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptureaudiofileoutput:0002:0001">오디오를 녹화하고 녹음한 오디오를 파일에 저장하는 캡처 출력입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptureaudiofileoutput:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcaptureaudiofileoutput:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVCaptureAudioFileOutput
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>AVCaptureAudioFileOutput</code>는 미디어 데이터를 오디오 파일에 쓰기 위해 <a href="avcapturefileoutput.md">@@TOKEN_1@@</a>에 선언된 전체 파일 녹화 인터페이스를 구현합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">또한 각 파일에 메타데이터 컬렉션을 쓰거나 오디오 인코딩 옵션을 지정하는 등 오디오 파일 형식별 옵션을 구성할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003"><code>AVCaptureAudioFileOutput</code>은(는) <a href="avcapturefileoutput/startrecording(to:recordingdelegate:">@@TOKEN_1@@</a>.md)를 지원하지 않습니다. 대신 <a href="avcaptureaudiofileoutput/startrecording(to:outputfiletype:recordingdelegate:">@@TOKEN_2@@</a>.md)를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:discovering-supported-types:0010:0001">지원되는 형식 검색</span>

- <span class="ko-segment" data-segment-id="seg:list:discovering-supported-types:0011:0001">[class func availableOutputFileTypes() -&gt; [AVFileType]](avcaptureaudiofileoutput/availableoutputfiletypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discovering-supported-types:0012:0001"><code>AVCaptureAudioFileOutput</code>가 작성할 수 있는 파일 유형을 식별하는 UTI를 포함하는 배열을 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:starting-a-recording:0013:0001">녹화 시작</span>

- <span class="ko-segment" data-segment-id="seg:list:starting-a-recording:0014:0001"><a href="avcaptureaudiofileoutput/startrecording(to:outputfiletype:recordingdelegate:">func startRecording(to: URL, outputFileType: AVFileType, recordingDelegate: any AVCaptureFileOutputRecordingDelegate)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:starting-a-recording:0015:0001">수신자에게 지정한 형식의 새 파일로 녹화를 시작하도록 지시하고, 녹화 완료 시 알림을 받을 델리게이트를 지정합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-output:0016:0001">출력 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0017:0001">[var audioSettings: [String : Any]?](avcaptureaudiofileoutput/audiosettings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0018:0001">수신자가 출력하기 전에 오디오를 디코딩하거나 다시 인코딩할 때 사용되는 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0019:0001">[var metadata: [AVMetadataItem]](avcaptureaudiofileoutput/metadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0020:0001">수신자의 출력 파일에 기록할 메타데이터 컬렉션입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-output:0021:0001">출력 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-output:0022:0001"><a href="avcaptureaudiofileoutput/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-output:0023:0001">새 오디오 파일 출력을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0024:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0025:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0026:0001"><a href="avcapturefileoutput.md">AVCaptureFileOutput</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0027:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0029:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="recording-movies-in-alternative-formats.md">Recording movies in alternative formats</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">영화 파일 캡처의 기본 형식을 변경합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avcapturemoviefileoutput.md">class AVCaptureMovieFileOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">QuickTime 영화 파일에 비디오와 오디오를 녹화하는 캡처 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avcapturefileoutput.md">class AVCaptureFileOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">캡처한 데이터를 파일로 기록할 수 있는 캡처 출력의 추상 상위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avcapturefileoutputdelegate.md">protocol AVCaptureFileOutputDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">미디어 파일 캡처 출력을 모니터링하거나 제어하는 메서드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avcapturefileoutputrecordingdelegate.md">protocol AVCaptureFileOutputRecordingDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">캡처한 미디어를 파일로 녹화하는 동안 발생하는 이벤트에 응답하는 메서드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput">View on Apple Developer</a>*</span>

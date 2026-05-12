---
source_path: "documentation/AVFAudio/avaudiofile.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiofile"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiofile:0000:0001">AVAudioFile</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiofile:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiofile:0002:0001">시스템이 읽기 또는 쓰기용으로 열 수 있는 오디오 파일을 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiofile:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiofile:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiofile:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiofile:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiofile:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiofile:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiofile:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiofile:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioFile
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">파일 형식과 관계없이 <a href="avaudiopcmbuffer.md">@@TOKEN_0@@</a> 객체를 사용해 읽기와 쓰기를 수행합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">이 객체들은 프레임워크에서 파일의 처리 형식으로 간주하는 <a href="avaudiocommonformat.md">@@TOKEN_0@@</a> 샘플을 포함합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">파일의 실제 형식을 사용해 상호 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">읽기와 쓰기는 항상 순차적으로 수행됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002"><a href="avaudiofile/frameposition.md">@@TOKEN_0@@</a> 속성을 설정하면 임의 접근이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-audio-file:0011:0001">오디오 파일 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-file:0012:0001"><a href="avaudiofile/init(forreading:">init(forReading: URL) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-file:0013:0001">표준 비인터리브 부동 소수점 형식을 사용해 파일을 읽기 위해 엽니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-file:0014:0001"><a href="avaudiofile/init(forreading:commonformat:interleaved:">init(forReading: URL, commonFormat: AVAudioCommonFormat, interleaved: Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-file:0015:0001">지정한 처리 형식을 사용해 파일을 읽기 위해 엽니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-file:0016:0001">[init(forWriting: URL, settings: [String : Any]) throws](avaudiofile/init(forwriting:settings:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-file:0017:0001">지정한 설정을 사용해 파일을 쓰기 위해 엽니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-file:0018:0001">[init(forWriting: URL, settings: [String : Any], commonFormat: AVAudioCommonFormat, interleaved: Bool) throws](avaudiofile/init(forwriting:settings:commonformat:interleaved:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-file:0019:0001">지정한 처리 형식과 설정을 사용해 파일을 쓰기 위해 엽니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:reading-and-writing-the-audio-buffer:0020:0001">오디오 버퍼 읽기 및 쓰기</span>

- <span class="ko-segment" data-segment-id="seg:list:reading-and-writing-the-audio-buffer:0021:0001"><a href="avaudiofile/read(into:">func read(into: AVAudioPCMBuffer) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reading-and-writing-the-audio-buffer:0022:0001">오디오 버퍼 전체를 읽습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reading-and-writing-the-audio-buffer:0023:0001"><a href="avaudiofile/read(into:framecount:">func read(into: AVAudioPCMBuffer, frameCount: AVAudioFrameCount) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reading-and-writing-the-audio-buffer:0024:0001">지정한 프레임 수에 따라 오디오 버퍼의 일부를 읽습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reading-and-writing-the-audio-buffer:0025:0001"><a href="avaudiofile/write(from:">func write(from: AVAudioPCMBuffer) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reading-and-writing-the-audio-buffer:0026:0001">오디오 버퍼를 순차적으로 씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reading-and-writing-the-audio-buffer:0027:0001"><a href="avaudiofile/close.md">func close()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reading-and-writing-the-audio-buffer:0028:0001">오디오 파일을 닫습니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-audio-file-properties:0029:0001">오디오 파일 속성 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0030:0001"><a href="avaudiofile/url.md">var url: URL</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0031:0001">오디오 파일의 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0032:0001"><a href="avaudiofile/fileformat.md">var fileFormat: AVAudioFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0033:0001">파일의 디스크 상 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0034:0001"><a href="avaudiofile/processingformat.md">var processingFormat: AVAudioFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0035:0001">파일의 처리 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0036:0001"><a href="avaudiofile/length.md">var length: AVAudioFramePosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0037:0001">파일의 샘플 프레임 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0038:0001"><a href="avaudioframeposition.md">typealias AVAudioFramePosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0039:0001">오디오 파일 또는 스트림의 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0040:0001"><a href="avaudiofile/frameposition.md">var framePosition: AVAudioFramePosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0041:0001">다음 읽기 또는 쓰기 작업이 발생하는 파일 내 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0042:0001"><a href="avaudioframecount.md">typealias AVAudioFrameCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0043:0001">오디오 샘플 프레임 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0044:0001"><a href="avaudiofiletypekey.md">let AVAudioFileTypeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0045:0001">오디오 파일 유형을 나타내는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-file-properties:0046:0001"><a href="avaudiofile/isopen.md">var isOpen: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-file-properties:0047:0001">파일이 열려 있는지를 나타내는 Boolean 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0048:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0049:0001"><a href="avaudiofile/init.md">init()</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0050:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0051:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0052:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0053:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0054:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0054:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0054:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0054:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0054:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0054:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0054:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0054:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0055:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0056:0001"><a href="avaudiobuffer.md">class AVAudioBuffer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">형식이 지정된 오디오 데이터 버퍼를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0058:0001"><a href="avaudiotime.md">class AVAudioTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0059:0001">시간의 한 순간을 표현할 때 사용하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0060:0001"><a href="audio-settings.md">Audio settings</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0061:0001">표준 키 및 값 상수를 사용해 오디오 처리 설정을 구성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0063:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiofile">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiounitcomponent/manufacturername.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/manufacturername"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:manufacturername:0000:0001">manufacturerName</span>

<span class="ko-segment" data-segment-id="seg:paragraph:manufacturername:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:manufacturername:0002:0001">오디오 유닛 컴포넌트의 제조사 이름입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:manufacturername:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:manufacturername:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:manufacturername:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:manufacturername:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:manufacturername:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:manufacturername:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:manufacturername:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var manufacturerName: String { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avaudiounitcomponent/audiocomponentdescription.md">var audioComponentDescription: AudioComponentDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">오디오 컴포넌트 설명입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var availableArchitectures: [NSNumber]](avaudiounitcomponent/availablearchitectures.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">오디오 유닛이 지원하는 아키텍처 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var configurationDictionary: [String : Any]](avaudiounitcomponent/configurationdictionary.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 유닛 컴포넌트의 구성 딕셔너리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiounitcomponent/hascustomview.md">var hasCustomView: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 유닛 컴포넌트에 사용자 정의 뷰가 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiounitcomponent/hasmidiinput.md">var hasMIDIInput: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 유닛 컴포넌트에 MIDI 입력이 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiounitcomponent/hasmidioutput.md">var hasMIDIOutput: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">오디오 유닛 컴포넌트에 MIDI 출력이 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiounitcomponent/name.md">var name: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">오디오 유닛 컴포넌트의 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiounitcomponent/passesauval.md">var passesAUVal: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">오디오 유닛 컴포넌트가 유효성 검사 테스트를 통과하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounitcomponent/issandboxsafe.md">var isSandboxSafe: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">오디오 유닛 컴포넌트가 샌드박싱에 안전한지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitcomponent/supportsnumberinputchannels(_:outputchannels:">func supportsNumberInputChannels(Int, outputChannels: Int) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">지정한 입력 및 출력 채널 수를 오디오 유닛 컴포넌트가 지원하는지 나타내는 부울 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitcomponent/typename.md">var typeName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">오디오 유닛 컴포넌트 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudiounitcomponent/version.md">var version: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">오디오 유닛 컴포넌트 버전 번호입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudiounitcomponent/versionstring.md">var versionString: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">오디오 유닛 컴포넌트의 버전 번호를 나타내는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudiounitcomponent/componenturl.md">var componentURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">오디오 유닛 컴포넌트의 URL입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/manufacturername">View on Apple Developer</a>*</span>

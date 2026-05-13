---
source_path: "documentation/AVFAudio/avaudiounitcomponent/availablearchitectures.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/availablearchitectures"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availablearchitectures:0000:0001">availableArchitectures</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablearchitectures:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablearchitectures:0002:0001">오디오 유닛이 지원하는 아키텍처 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablearchitectures:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availablearchitectures:0004:0001">macOS 10.10+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var availableArchitectures: [NSNumber] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 값은 <code>NSArray</code>의 <code>NSNumbers</code>로, 각 항목은 <a href="https://developer.apple.com/documentation/Foundation/Bundle">@@TOKEN_2@@</a>에 있는 Mach-O Architecture의 상수 중 하나에 해당합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiounitcomponent/audiocomponentdescription.md">var audioComponentDescription: AudioComponentDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">오디오 구성요소 설명입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var configurationDictionary: [String : Any]](avaudiounitcomponent/configurationdictionary.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 유닛 구성요소의 구성 딕셔너리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiounitcomponent/hascustomview.md">var hasCustomView: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 유닛 구성요소에 사용자 지정 뷰가 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiounitcomponent/hasmidiinput.md">var hasMIDIInput: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 유닛 구성요소에 MIDI 입력이 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiounitcomponent/hasmidioutput.md">var hasMIDIOutput: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">오디오 유닛 구성요소에 MIDI 출력이 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiounitcomponent/manufacturername.md">var manufacturerName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">오디오 유닛 구성요소의 제조사 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiounitcomponent/name.md">var name: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">오디오 유닛 구성요소의 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounitcomponent/passesauval.md">var passesAUVal: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">오디오 유닛 구성요소가 검증 테스트를 통과했는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitcomponent/issandboxsafe.md">var isSandboxSafe: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">오디오 유닛 구성요소가 샌드박스 사용에 안전한지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitcomponent/supportsnumberinputchannels(_:outputchannels:">func supportsNumberInputChannels(Int, outputChannels: Int) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">오디오 유닛 구성요소가 지정된 입력/출력 채널 수를 지원하는지 나타내는 부울 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudiounitcomponent/typename.md">var typeName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">오디오 유닛 구성요소 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudiounitcomponent/version.md">var version: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">오디오 유닛 구성요소 버전 번호입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudiounitcomponent/versionstring.md">var versionString: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">A string that represents the audio unit component version number.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avaudiounitcomponent/componenturl.md">var componentURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">The URL of the audio unit component.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/availablearchitectures">View on Apple Developer</a>*</span>

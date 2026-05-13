---
source_path: "documentation/AVFAudio/avaudiounitcomponent/typename.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/typename"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:typename:0000:0001">typeName</span>

<span class="ko-segment" data-segment-id="seg:paragraph:typename:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:typename:0002:0001">The audio unit component type.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:typename:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:typename:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:typename:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:typename:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:typename:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:typename:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:typename:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var typeName: String { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">For information about possible values, see the “Audio Unit Types” topic under <a href="avaudiounitcomponent.md">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiounitcomponent/audiocomponentdescription.md">var audioComponentDescription: AudioComponentDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The audio component description.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var availableArchitectures: [NSNumber]](avaudiounitcomponent/availablearchitectures.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">샘플 레이트 변환기 또는 디코더가 사용하는 프라이밍 방식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var configurationDictionary: [String : Any]](avaudiounitcomponent/configurationdictionary.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The audio unit component’s configuration dictionary.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiounitcomponent/hascustomview.md">var hasCustomView: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A Boolean value that indicates whether the audio unit component has a custom view.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiounitcomponent/hasmidiinput.md">var hasMIDIInput: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A Boolean value that indicates whether the audio unit component has MIDI input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiounitcomponent/hasmidioutput.md">var hasMIDIOutput: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A Boolean value that indicates whether the audio unit component has MIDI output.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiounitcomponent/manufacturername.md">var manufacturerName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The name of the manufacturer of the audio unit component.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounitcomponent/name.md">var name: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The name of the audio unit component.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitcomponent/passesauval.md">var passesAUVal: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">ARKit를 사용해 Full Space를 활용해 재미있는 게임을 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitcomponent/issandboxsafe.md">var isSandboxSafe: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">A Boolean value that indicates whether the audio unit component is safe for sandboxing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="../visionOS/tracking-and-visualizing-hand-movement.md">Tracking and visualizing hand movement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">필수 입력을 제공하지 못한 센서를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudiounitcomponent/version.md">var version: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">프레임워크가 필수 센서에 접근하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudiounitcomponent/versionstring.md">var versionString: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">장치가 세션 구성에 대한 지원이 없음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avaudiounitcomponent/componenturl.md">var componentURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">world tracking에서 복구할 수 없는 문제가 발생했음을 나타내는 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/typename">View on Apple Developer</a>*</span>

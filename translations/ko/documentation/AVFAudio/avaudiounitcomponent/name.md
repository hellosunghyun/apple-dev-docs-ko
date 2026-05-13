---
source_path: "documentation/AVFAudio/avaudiounitcomponent/name.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/name"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:name:0000:0001">name</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0002:0001">The name of the audio unit component.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:name:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var name: String { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avaudiounitcomponent/audiocomponentdescription.md">var audioComponentDescription: AudioComponentDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">해당 면은 실제 세계의 천장 일부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var availableArchitectures: [NSNumber]](avaudiounitcomponent/availablearchitectures.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 세션 구성으로 복원하려고 시도하는 이전 AR 세션의 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var configurationDictionary: [String : Any]](avaudiounitcomponent/configurationdictionary.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The audio unit component’s configuration dictionary.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiounitcomponent/hascustomview.md">var hasCustomView: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A Boolean value that indicates whether the audio unit component has a custom view.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiounitcomponent/hasmidiinput.md">var hasMIDIInput: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A Boolean value that indicates whether the audio unit component has MIDI input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiounitcomponent/hasmidioutput.md">var hasMIDIOutput: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A Boolean value that indicates whether the audio unit component has MIDI output.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiounitcomponent/manufacturername.md">var manufacturerName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The name of the manufacturer of the audio unit component.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiounitcomponent/passesauval.md">var passesAUVal: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A Boolean value that indicates whether the audio unit component passes the validation tests.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounitcomponent/issandboxsafe.md">var isSandboxSafe: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A Boolean value that indicates whether the audio unit component is safe for sandboxing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitcomponent/supportsnumberinputchannels(_:outputchannels:">func supportsNumberInputChannels(Int, outputChannels: Int) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitcomponent/typename.md">var typeName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">The audio unit component type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudiounitcomponent/version.md">var version: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">The audio unit component version number.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudiounitcomponent/versionstring.md">var versionString: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">A string that represents the audio unit component version number.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudiounitcomponent/componenturl.md">var componentURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">The URL of the audio unit component.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/name">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avmediacharacteristic/useswidegamutcolorspace.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/useswidegamutcolorspace"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:useswidegamutcolorspace:0000:0001">usesWideGamutColorSpace</span>

<span class="ko-segment" data-segment-id="seg:paragraph:useswidegamutcolorspace:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:useswidegamutcolorspace:0002:0001">A media characteristic that indicates that a track uses a wide-gamut color space.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:useswidegamutcolorspace:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:useswidegamutcolorspace:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:useswidegamutcolorspace:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:useswidegamutcolorspace:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:useswidegamutcolorspace:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:useswidegamutcolorspace:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:useswidegamutcolorspace:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:useswidegamutcolorspace:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let usesWideGamutColorSpace: AVMediaCharacteristic
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="handling-audio-interruptions.md">Handling audio interruptions</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Tracks that use a wide-gamut color space may use colors that can’t be accurately represented in standard RGB mode.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosequencer/seconds(forbeats:">func seconds(forBeats: AVMusicTimeStamp) -&gt; TimeInterval</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">세션 객체의 카테고리가 변경되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmediacharacteristic/containsalphachannel.md">static let containsAlphaChannel: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">출력 경로가 앱에 의해 덮어쓰기되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmediacharacteristic/containshdrvideo.md">static let containsHDRVideo: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">기기가 수면에서 깨어날 때 경로가 변경되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmediacharacteristic/framebased.md">static let frameBased: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 카테고리에 더 이상 적절한 경로가 없어 경로가 변경되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmediacharacteristic/containsstereomultiviewvideo.md">static let containsStereoMultiviewVideo: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">작사가를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosequencer/infodictionarykey/title.md">static let title: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">제목을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosequencer/infodictionarykey/tracknumber.md">static let trackNumber: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A media characteristic that indicates the video track carries information related to the horizontal field of view.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmediacharacteristic/indicatesnonrectilinearprojection.md">static let indicatesNonRectilinearProjection: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">A media characteristic that indicates the video track carries information related to how it should be projected for display.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/useswidegamutcolorspace">View on Apple Developer</a>*</span>

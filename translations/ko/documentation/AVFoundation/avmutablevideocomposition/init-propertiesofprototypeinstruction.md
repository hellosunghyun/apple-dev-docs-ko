---
source_path: "documentation/AVFoundation/avmutablevideocomposition/init-propertiesofprototypeinstruction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/init-propertiesofprototypeinstruction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initpropertiesofprototypeinstruction:0000:0001">init(propertiesOf:prototypeInstruction:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpropertiesofprototypeinstruction:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpropertiesofprototypeinstruction:0002:0001">지정된 에셋 속성과 프로토타입 비디오 컴포지션 지시문으로 가변 비디오 컴포지션을 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpropertiesofprototypeinstruction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initpropertiesofprototypeinstruction:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpropertiesofprototypeinstruction:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpropertiesofprototypeinstruction:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpropertiesofprototypeinstruction:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpropertiesofprototypeinstruction:0004:0005">tvOS 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(propertiesOf asset: AVAsset, prototypeInstruction: AVVideoCompositionInstruction)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>asset</code>: 비디오 컴포지션을 생성할 에셋입니다. 이 메서드를 호출하기 전에 에셋의 <a href="avasset/duration.md">@@TOKEN_1@@</a> 및 <a href="avasset/tracks.md">@@TOKEN_2@@</a> 속성을 로드합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>prototypeInstruction</code>: 프로토타입으로 사용할 비디오 컴포지션 지시문입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablevideocomposition/videocomposition(withpropertiesof:completionhandler:">class func videoComposition(withPropertiesOf: AVAsset, completionHandler: (AVMutableVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 에셋의 비디오 트랙을 표시하도록 구성된 새 비디오 컴포지션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablevideocomposition/videocomposition(withpropertiesof:prototypeinstruction:completionhandler:">class func videoComposition(withPropertiesOf: AVAsset, prototypeInstruction: AVVideoCompositionInstruction, completionHandler: (AVMutableVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 에셋 속성과 프로토타입 비디오 컴포지션 지시문으로 새 가변 비디오 컴포지션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmutablevideocomposition/videocomposition(with:applyingcifilterswithhandler:completionhandler:">class func videoComposition(with: AVAsset, applyingCIFiltersWithHandler: (AVAsynchronousCIImageFilteringRequest) -&gt; Void, completionHandler: (AVMutableVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 에셋의 각 비디오 프레임에 Core Image 필터를 적용하도록 구성된 새 비디오 컴포지션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmutablevideocomposition/init(propertiesof:">init(propertiesOf: AVAsset)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 에셋 속성으로 가변 비디오 컴포지션을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmutablevideocomposition/init(asset:applyingcifilterswithhandler:">init(asset: AVAsset, applyingCIFiltersWithHandler: (AVAsynchronousCIImageFilteringRequest) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 에셋의 각 비디오 프레임에 Core Image 필터를 적용하도록 구성된 가변 비디오 컴포지션을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/init(propertiesof:prototypeinstruction:">View on Apple Developer</a>)*</span>

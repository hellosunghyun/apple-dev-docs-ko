---
source_path: "documentation/AVFoundation/avassetvariantqualifier.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetvariantqualifier:0000:0001">AVAssetVariantQualifier</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetvariantqualifier:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetvariantqualifier:0002:0001">HTTP Live Streaming 자산 변형을 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetvariantqualifier:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetvariantqualifier:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetvariantqualifier:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetvariantqualifier:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetvariantqualifier:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetvariantqualifier:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetvariantqualifier:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetvariantqualifier:0004:0007">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetVariantQualifier
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-variant-qualifier:0008:0001">변형 한정자 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-variant-qualifier:0009:0001"><a href="avassetvariantqualifier/init(variant:">convenience init(variant: AVAssetVariant)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-variant-qualifier:0010:0001">에셋 변형을 사용해 변형 한정자를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-variant-qualifier:0011:0001"><a href="avassetvariant.md">class AVAssetVariant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-variant-qualifier:0012:0001">비트 전송률 변형을 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-variant-qualifier:0013:0001"><a href="avassetvariantqualifier/init(predicate:">convenience init(predicate: NSPredicate)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-variant-qualifier:0014:0001">조건식을 사용해 변형 한정자를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:building-predicates:0015:0001">조건식 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0016:0001"><a href="avassetvariantqualifier/predicate(foraudiosamplerate:mediaselectionoption:operatortype:">class func predicate(forAudioSampleRate: Double, mediaSelectionOption: AVMediaSelectionOption?, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0017:0001">오디오 샘플 레이트를 위한 조건식을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0018:0001"><a href="avassetvariantqualifier/predicate(foraudiosamplerate:operatortype:">class func predicate(forAudioSampleRate: Double, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0019:0001">오디오 샘플 레이트를 위한 NSPredicate를 생성하며, 다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0020:0001"><a href="avassetvariantqualifier/predicate(forbinauralaudio:">class func predicate(forBinauralAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0021:0001">바이노럴 오디오를 위한 NSPredicate를 생성하며, 다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0022:0001"><a href="avassetvariantqualifier/predicate(forbinauralaudio:mediaselectionoption:">class func predicate(forBinauralAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0023:0001">바이노럴 오디오용 조건식을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0024:0001"><a href="avassetvariantqualifier/predicate(forchannelcount:mediaselectionoption:operatortype:">class func predicate(forChannelCount: Int, mediaSelectionOption: AVMediaSelectionOption?, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0025:0001">채널 수, 미디어 선택 옵션, 연산자 타입을 사용해 조건식을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0026:0001"><a href="avassetvariantqualifier/predicate(forchannelcount:operatortype:">class func predicate(forChannelCount: Int, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0027:0001">다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있는 오디오 채널 수용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0028:0001"><a href="avassetvariantqualifier/predicate(fordownmixaudio:">class func predicate(forDownmixAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0029:0001">다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있는 몰입형 오디오용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0030:0001"><a href="avassetvariantqualifier/predicate(fordownmixaudio:mediaselectionoption:">class func predicate(forDownmixAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0031:0001">다운믹스 오디오용 조건식을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0032:0001"><a href="avassetvariantqualifier/predicate(forimmersiveaudio:">class func predicate(forImmersiveAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0033:0001">다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있는 몰입형 오디오용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0034:0001"><a href="avassetvariantqualifier/predicate(forimmersiveaudio:mediaselectionoption:">class func predicate(forImmersiveAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0035:0001">몰입형 오디오용 조건식을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0036:0001"><a href="avassetvariantqualifier/predicate(forpresentationheight:operatortype:">class func predicate(forPresentationHeight: CGFloat, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0037:0001">높이와 연산자 타입으로 조건식을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:building-predicates:0038:0001"><a href="avassetvariantqualifier/predicate(forpresentationwidth:operatortype:">class func predicate(forPresentationWidth: CGFloat, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:building-predicates:0039:0001">너비와 연산자 타입으로 조건식을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0040:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0041:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0042:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0043:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0006"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0008"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0044:0009"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0045:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001">[var variantQualifiers: [AVAssetVariantQualifier]](avassetdownloadcontentconfiguration/variantqualifiers.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">이 구성의 변형 한정자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001">[var mediaSelections: [AVMediaSelection]](avassetdownloadcontentconfiguration/mediaselections.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">작업이 다운로드하는 자산의 미디어 선택 항목입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcaption/ruby.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaption/ruby"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcaptionruby:0000:0001">AVCaption.Ruby</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionruby:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionruby:0002:0001">Ruby 문자를 표시하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionruby:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcaptionruby:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionruby:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionruby:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionruby:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class Ruby
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Ruby characters는 일반적으로 일본어 콘텐츠에서 사용되며 기본 텍스트 옆에 함께 표시되는 작은 주석입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-ruby-text:0010:0001">Ruby 텍스트 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-ruby-text:0011:0001"><a href="avcaption/ruby/init(text:">init(text: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-ruby-text:0012:0001">Ruby 텍스트를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-ruby-text:0013:0001"><a href="avcaption/ruby/init(text:position:alignment:">convenience init(text: String, position: AVCaption.Ruby.Position, alignment: AVCaption.Ruby.Alignment)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-ruby-text:0014:0001">위치와 정렬을 지정해 Ruby 텍스트를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-text-properties:0015:0001">텍스트 속성 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-text-properties:0016:0001"><a href="avcaption/ruby/text.md">var text: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-text-properties:0017:0001">Ruby 텍스트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-text-properties:0018:0001"><a href="avcaption/ruby/position-swift.property.md">var position: AVCaption.Ruby.Position</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-text-properties:0019:0001">Ruby 텍스트 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-text-properties:0020:0001"><a href="avcaption/ruby/position-swift.enum.md">AVCaption.Ruby.Position</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-text-properties:0021:0001">Ruby 텍스트 위치를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-text-properties:0022:0001"><a href="avcaption/ruby/alignment-swift.property.md">var alignment: AVCaption.Ruby.Alignment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-text-properties:0023:0001">Ruby 텍스트 정렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-text-properties:0024:0001"><a href="avcaption/ruby/alignment-swift.enum.md">AVCaption.Ruby.Alignment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-text-properties:0025:0001">Ruby 텍스트 정렬을 나타내는 상수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0026:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0027:0001"><a href="avcaption/ruby/init(coder:">init?(coder: NSCoder)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0028:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0029:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0030:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0031:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0006"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0007"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0008"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0009"><a href="../Foundation/NSSecureCoding.md">NSSecureCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0010"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0011"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avcaption/ruby(at:">func ruby(at: String.Index) -&gt; (AVCaption.Ruby?, Range&lt;String.Index&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">지정한 인덱스 위치의 ruby 텍스트를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avcaption/textcombine(at:">func textCombine(at: String.Index) -&gt; (AVCaption.TextCombine, Range&lt;String.Index&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">지정한 인덱스 위치의 text combine을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avcaption/textcombine.md">AVCaption.TextCombine</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">캡션이 지원하는 렌더링 정책 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaption/ruby">View on Apple Developer</a>*</span>

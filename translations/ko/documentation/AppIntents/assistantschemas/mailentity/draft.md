---
source_path: "documentation/AppIntents/assistantschemas/mailentity/draft.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantschemas/mailentity/draft"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:draft:0000:0001">draft</span>

<span class="ko-segment" data-segment-id="seg:paragraph:draft:0001:0001">**Framework**: App Intents **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:draft:0002:0001">이 앱 엔티티는 이메일 초안을 설명합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:draft:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:draft:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:draft:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:draft:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:draft:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:draft:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:draft:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:draft:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var draft: some AssistantSchemas.Entity { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="making-email-actions-available-to-siri-and-apple-intelligence.md">Making email actions available to Siri and Apple Intelligence</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">Swift 매크로를 사용하면 앱 엔티티 구현에서 추가 속성을 생성하고 protocol 적합성을 추가할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">다음 예제는 <code>.mail.draft</code> 스키마를 준수하는 앱 엔티티를 보여줍니다.
``<code>swift
@AppEntity(schema: .mail.draft)
struct MailDraftEntity: AppEntity {
    struct Query: EntityStringQuery {
        func entities(for identifiers: [MailDraftEntity.ID]) async throws -&gt; [MailDraftEntity] { [] }
        func entities(matching string: String) async throws -&gt; [MailDraftEntity] { [] }
    }

    static var defaultQuery = Query()
    var displayRepresentation: DisplayRepresentation { &quot;Mail Draft&quot; }

    let id = UUID()

    @Property
    var to: [IntentPerson]

    @Property
    var cc: [IntentPerson]

    @Property
    var bcc: [IntentPerson]

    @Property
    var subject: String?

    @Property
    var body: AttributedString?

    @Property
    var attachments: [IntentFile]

    @Property
    var account: MailAccountEntity
}
</code>``</span>

```swift
@AppEntity(schema: .mail.draft)
struct MailDraftEntity: AppEntity {
    struct Query: EntityStringQuery {
        func entities(for identifiers: [MailDraftEntity.ID]) async throws -> [MailDraftEntity] { [] }
        func entities(matching string: String) async throws -> [MailDraftEntity] { [] }
    }

    static var defaultQuery = Query()
    var displayRepresentation: DisplayRepresentation { "Mail Draft" }

    let id = UUID()

    @Property
    var to: [IntentPerson]

    @Property
    var cc: [IntentPerson]

    @Property
    var bcc: [IntentPerson]

    @Property
    var subject: String?

    @Property
    var body: AttributedString?

    @Property
    var attachments: [IntentFile]

    @Property
    var account: MailAccountEntity
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0001"><code>.mail</code> 앱 인텐트 도메인에 대한 자세한 내용은 <a href="making-email-actions-available-to-siri-and-apple-intelligence.md">@@TOKEN_1@@</a>에서 확인할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0002">앱 인텐트 도메인에 대한 일반적인 정보는 <a href="integrating-actions-with-siri-and-apple-intelligence.md">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="assistantschemas/mailentity/account.md">var account: some AssistantSchemas.Entity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 앱 엔티티는 이메일 계정을 설명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="assistantschemas/mailentity/mailbox.md">var mailbox: some AssistantSchemas.Entity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 앱 엔티티는 이메일 사서함을 설명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="assistantschemas/mailentity/message.md">var message: some AssistantSchemas.Entity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 앱 엔티티는 이메일 메시지를 설명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="assistantschemas/mailentity.md">AssistantSchemas.MailEntity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이메일을 설명하는 앱 엔티티의 Assistant schema 준수 항목입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantschemas/mailentity/draft">View on Apple Developer</a>*</span>
